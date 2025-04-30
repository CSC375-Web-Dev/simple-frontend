async function loadSecretMessage() {
    const response = await fetch('https://simple-backend-production-cd2e.up.railway.app/message')
    const data = await response.json()
    const secretMessageContainer = document.getElementById('secret-message')
    secretMessageContainer.innerText = data.message
}