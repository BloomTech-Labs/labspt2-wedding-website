const stripe = require('stripe')(process.env.sk_test_hqtgInyFanCIiKuL3bzSwgCx)

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

const paymentApi = app => {
  app.get('/stripe', (req, res) => {
    res.send({
      message: 'Ayeeeeeee Stripe checkout what up girl.',
      timestamp: new Date().toISOString(),
    })
  })

  app.post('/stripe', (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    }
    stripe.charge.create(body, stripeChargeCallback(res))
  })
  return app
}

module.exports = paymentApi
