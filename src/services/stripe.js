const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency = "clp") => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ["card"],
  });

  return paymentIntent;
};

module.exports = {
  createPaymentIntent,
};
