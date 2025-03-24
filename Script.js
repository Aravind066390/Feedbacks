(function(){
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
})();

const range = document.getElementById('satisfactionRange');
const rangeValue = document.getElementById('rangeValue');

range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
});

document.getElementById('feedbackForm').addEventListener('submit', function(e){
    e.preventDefault();
    emailjs.sendForm('service_2zqbwko', 'template_zlsg7xj', this)
        .then(function() {
            alert('Thank you! Your feedback has been sent.');
            document.getElementById('feedbackForm').reset();
            rangeValue.textContent = 3; // Reset range display
        }, function(error) {
            console.error('FAILED...', error);
            alert('Error sending feedback. Please try again.');
        });
});

