// Function to generate a random password
function generatePassword() {
    // Special characters that can be included in the password
    const specialCharacters = '!@#$%^&*()_+{}:"<>?/.,;~`|\\=-';

    // Simple characters that can be included in the password
    const simpleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    // Desired length for the password
    const length = 20;

    // Variable to store the generated password
    let password = '';

    // Combination of available characters for password generation
    const availableCharacters = simpleCharacters + specialCharacters;

    // Loop to generate each character of the password
    for (let i = 0; i < length; i++) {
        // Generate a random index to select a character from the available characters combination
        const index = Math.floor(Math.random() * availableCharacters.length);

        // Add the selected character to the password
        password += availableCharacters.charAt(index);
    }

    // Display the generated password in the input field
    document.getElementById('passwordInput').value = password;
}