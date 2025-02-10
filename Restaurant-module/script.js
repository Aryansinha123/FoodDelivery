document.addEventListener('DOMContentLoaded', () => {
    // Mock user data (for demo purposes)
    const mockUser = {
        email: 'admin@restaurant.com',
        password: 'admin123',
    };

    // Save mock user to localStorage (only for the first time)
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(mockUser));
    }

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Get stored user from localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            // Validate credentials
            if (email === storedUser.email && password === storedUser.password) {
                alert('Login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    // Register Button (Redirect to registration page)
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }

    // Registration Form Submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Save new user to localStorage
            localStorage.setItem('user', JSON.stringify({ email, password }));

            alert('Registration successful! Please login.');
            window.location.href = 'index.html';
        });
    }

    // Redirect to Login Page
    const loginRedirectBtn = document.getElementById('loginRedirectBtn');
    if (loginRedirectBtn) {
        loginRedirectBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }

    // Section Navigation
    window.showSection = (sectionId) => {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    };
});