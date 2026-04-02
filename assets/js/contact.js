/**
 * Contact Form Handler
 * Integration with Google Apps Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (!contactForm) return;

    // REPLACE THIS URL with your actual Google Apps Script Web App URL
    // To get this URL: 
    // 1. Create a Google Sheet
    // 2. Extensions > Apps Script
    // 3. Paste the provided script and Deploy as Web App
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxode9ChAHUPsglSX8ZdCpofp9SAYJTWG4qtRyfst89caMKa9_Szw-aH8BcWUvPHrd7/exec';

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI Feedback
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        formStatus.className = 'form-status';
        formStatus.textContent = '';
        formStatus.style.display = 'none';

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject') || 'No Subject',
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        try {
            // Note: Google Apps Script requires a POST request
            // We use mode: 'no-cors' if the Apps Script is not configured for CORS,
            // but standard 'cors' is better if handled by the script.
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                }
            });

            // Since 'no-cors' doesn't return a readable response, 
            // we assume success if no network error occurred.
            formStatus.className = 'form-status success';
            formStatus.textContent = "Thank you! Your message has been sent successfully. I'll get back to you soon.";
            formStatus.style.display = 'block';
            contactForm.reset();

        } catch (error) {
            console.error('Error submitting form:', error);
            formStatus.className = 'form-status error';
            formStatus.textContent = "Oops! Something went wrong. You can also reach me directly at jonnamlargo@gmail.com";
            formStatus.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <span>↗</span>';
        }
    });
});