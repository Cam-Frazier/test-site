document.addEventListener('DOMContentLoaded', function () {
  // Add animation for skills progress bars
  const progressBarElements = document.querySelectorAll('.progress-bar');
  progressBarElements.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });

  // Handle form submission
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);
    const formDataObject = {};
    
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // You can log the form data or send it to a server using AJAX/fetch
    console.log(formDataObject);

    // For a real-world scenario, you can use fetch or AJAX to send data to a server
    // Example using fetch:
    // fetch('https://example.com/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formDataObject),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    // For this example, we'll show an alert
    alert('Form submitted successfully!');
    
    // You can also reset the form
    contactForm.reset();
  });
});
