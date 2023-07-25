document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Add your registration logic here (e.g., sending data to the server)
    // Assuming successful registration, show confirmation message and redirect to dashboard
    showConfirmationMessage(`Thank you, ${name}, for signing up! Redirecting to the dashboard...`);
  });
  
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Add your login logic here (e.g., validating credentials on the server)
    // Assuming successful login, show confirmation message and redirect to dashboard
    showConfirmationMessage('Login successful! Redirecting to the dashboard...');
  });
  
  function showConfirmationMessage(message) {
    const confirmationMessage = document.querySelector('.confirmation-message');
    const confirmationText = document.getElementById('confirmation-text');
    confirmationText.textContent = message;
    confirmationMessage.style.display = 'block';
  
    setTimeout(function () {
      confirmationMessage.style.display = 'none';
      redirectToDashboard();
    }, 3000); // Hide the confirmation message after 3 seconds and then redirect to dashboard
  }
  
  function redirectToDashboard() {
    window.location.href = 'index.html';
  }

  
  

  
  
 