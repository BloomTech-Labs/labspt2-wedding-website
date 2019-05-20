const helper = require('../helpers/userDb')

module.exports = server => {
  server.post('/stripe', stripeHome), server.get('/stripe', stripeTest)
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let userId = null

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    console.log('STRIPE cb userId :', userId)
    helper.updateUser(userId, { isPremium: 1 }).then(number => {
      console.log('number :', number)
      res.status(200).send({ success: stripeRes })
    })
  }
}

stripeHome = (req, res) => {
  const body = {
    source: req.body.tokenBody.token.id,
    amount: req.body.tokenBody.amount,
    currency: 'usd',
  }
  userId = req.body.userId
  console.log('STRIPE endpoint body :', body)
  console.log('STRIPE userId :', userId)
  stripe.charges.create(body, stripeChargeCallback(res)).catch(err => {
    console.log('stripe err', err)
    res.status(500).send(err)
  })
  //userdata boolean true when charge hits
}
stripeTest = (req, res) => {
  res.status(200).send('stripe is running')
}
