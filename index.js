


document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const videoInput = document.getElementById('video');
    const formData = new FormData();
    formData.append('video', videoInput.files[0]);

    try {
        const response = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            alert('File uploaded successfully: ' + result.filename);
        } else {
            alert('File upload failed');
        }
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file');
    }
});