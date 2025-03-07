// Register function to handle form data and submit it via JavaScript
async function register() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
  
    const result = await createAccount(jsonData);
  
    if (result.error) {
      return console.log('An error occurred:', result.error);
    }
  
    console.log('Account created!', result);
  }
  
  // Function to send the account data to the server
  async function createAccount(account) {
    try {
      const response = await fetch('//localhost:5000/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: account,
      });
      return await response.json();
    } catch (error) {
      return { error: error.message || 'Unknown error' };
    }
  }
  