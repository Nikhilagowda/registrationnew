document.getElementById('MyForm').addEventListener('submit', function(event) {
    // Prevent the default page reload on form submission
    event.preventDefault();

    // Grab form values
    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const selectedEvent = document.getElementById('event').value;

    // Simple validation check
    if (fullName === "" || email === "" || phone === "" || selectedEvent === "") {
        alert("Please fill out all the fields.");
        return;
    }

    // Success Message
    alert(`Thank you, ${fullName}! You have successfully registered for the ${selectedEvent}.`);
    
    // Optional: Clear the form after submission
    this.reset();
});
