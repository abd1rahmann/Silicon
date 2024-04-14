async function handleSubmit(event) {
    event.preventDefault();

    // Hämta formulärdata
    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('emailaddress').value,
        specialist: document.getElementById('specialist').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    console.log(JSON.stringify(formData)); // Logga formulärdatan

    try {
        // Gör en HTTP POST-begäran
        const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/book-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data !== null) {
            console.log('Success:', data);
            // Här kan du visa ett meddelande till användaren att det lyckades
        } else {
            console.log('Empty response');
            // Hantera tomt svar här om det behövs
        }
    } catch (error) {
        console.error('Error:', error);
        // Här kan du visa ett felmeddelande till användaren
    }
}