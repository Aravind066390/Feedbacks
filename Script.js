document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storeName = document.getElementById('storeName').value;
    const experience = document.getElementById('experience').value;
    const changes = document.getElementById('changes').value;

    // This is where you could send data to a server or store it
    console.log("Store Name:", storeName);
    console.log("Experience:", experience);
    console.log("Required Changes:", changes);

    document.getElementById('message').innerText = "Thank you for your feedback!";

    // Clear form
    this.reset();
});
