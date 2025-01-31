const genQR = async () => {
    const text = document.getElementById("qrtext").value.trim();
    const size = document.getElementById("size").value;
    const img = document.getElementById("img");
    const qrContainer = document.getElementById("qr-container");

    if (!text) {
        showError("Please enter some text to generate a QR code");
        return;
    }

    try {
        // Show loading state
        img.classList.add("loading");
        
        const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=${size}x${size}`;
        
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = apiUrl;
        });

        // Show success state
        img.classList.remove("loading");
        qrContainer.classList.add("generated");
        // Clear textarea after successful generation
        document.getElementById("qrtext").value = '';
    } catch (error) {
        showError("Failed to generate QR code. Please try again.");
        img.classList.remove("loading");
    }
};

const showError = (message) => {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
    errorDiv.classList.add("show");
    setTimeout(() => errorDiv.classList.remove("show"), 3000);
};

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        mobileMenuBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
    }
});

// Navigation functionality
const navLinksArray = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navLinksArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active states
        navLinksArray.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Hide all sections first
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// QR Text Input Auto-clear
const qrTextInput = document.getElementById('qrtext');
qrTextInput.addEventListener('focus', function() {
    if (this.value === 'Enter text to generate QR code') {
        this.value = '';
    }
});

qrTextInput.addEventListener('blur', function() {
    if (this.value === '') {
        this.value = 'Enter text to generate QR code';
    }
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the form data to a server
    alert('Message sent successfully!');
    contactForm.reset();
});