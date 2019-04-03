module.exports = server => {
  server.post('/stripe', stripeHome),
  server.get('/stripe', stripeTest)
};

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};
stripeHome= (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(res)).catch(err=>res.status(500).send(err))
    //userdata boolean true when charge hits
}
stripeTest= (req,res) => {
  res.status(200).send('stripe is running')
}
