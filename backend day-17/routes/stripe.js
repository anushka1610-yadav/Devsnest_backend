var router = require('express').Router();
var path = require("path");
const stripe = require("stripe")("pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3
");

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post('/payment', async(req, res) => {
    try {
        const session = await stripe.checkout.session.create({
            line_items: [{
                amount: req.body.prices * 100,
                name: "Shopping",
                currency: "usd",
                quantity: 1
            }],
            payment_method_types: ["card"],
            success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}?cancelled=true`
        });
        res.redirect(303, session.url)
    } catch(err) {
        res.status(err.statusCode || 500).json(err.message);
    }

});

module.exports = router;