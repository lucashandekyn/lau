var stripe = Stripe('YOUR_PUBLISHABLE_KEY'); // Replace 'YOUR_PUBLISHABLE_KEY' with your actual Stripe publishable key
var checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', function () {
    fetch('/create-checkout-session', {
        method: 'POST'
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (session) {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
});
