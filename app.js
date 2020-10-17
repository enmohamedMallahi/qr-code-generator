// Add Event Listener To Button Element
window.onload = () => {
    document.getElementById('qr-generate').addEventListener('click',generateQR)
}

// Generate QR Img
generateQR = () => {
    const text = document.getElementById('text-input').value;
    // Url Of Api Used To Create QR Img
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=270x270&data='
    // Create Img Element
    const img = document.createElement('img');
    // Add Url Api To Img As Src
    img.src = `${url}${text}`;
    // Remove The Previuos QR Img
    document.getElementById('img-output').innerHTML = '';
    // Append Img Element To DOM
    document.getElementById('img-output').appendChild(img);
}