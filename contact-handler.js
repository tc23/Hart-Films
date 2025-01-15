
// Contact form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    form.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        if (!name || !email.includes('@')) {
            alert('Please provide a valid name and email address.');
            event.preventDefault();
        } else {
            console.log('Form submitted successfully!');
        }
    });
});
