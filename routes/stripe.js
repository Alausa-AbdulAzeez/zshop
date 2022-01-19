const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  const authHeader = req.headers.token;
  const token = req.body.tokenId;
  // const API_KEY = authHeader.split(" ")[1];

  await stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: token,
      description: "test",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      }
      if (stripeRes) {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
