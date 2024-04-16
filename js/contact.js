async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('emailaddress').value,
        specialist: document.getElementById('specialist').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    console.log(JSON.stringify(formData)); 

    try {

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

        } else {
            console.log('Empty response');

        }
    } catch (error) {
        console.error('Error:', error);

    }
}