

// let btn = document.querySelector('.btn.btn-outline-warning');

// btn.addEventListener('click', function (){
//     alert("button clicked");
// });


// let btn = document.querySelector('.btn.btn-outline-warning');

// btn.addEventListener('click', function () {
//     alert("button clicked");
// });



  // Step 1: Target the form
//   const form = document.getElementById('bookForm');

//   // Step 2: Listen to form submit event
//   form.addEventListener('submit', function (e) {
//     e.preventDefault(); // prevent page reload

//     // Step 3: Get input values
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let date = document.getElementById('date').value;

//     // Step 4: Simple validation
//     if (name === "" || email === "" || date === "") {
//       alert("Please fill all fields!");
//       return;
//     }

//     // Step 5: Show confirmation
//     alert(`Thank you ${name}! Your table is booked for ${date}.`);
    
//     // (Optional) Clear form
//     form.reset();
//   });






// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active')); // remove from all
    this.classList.add('active'); // add to clicked one
  });
});


// Theme toggle logic
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Optional: Change button icon
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});









// booka tabale



// Book a Table Form Validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const peopleInput = document.getElementById('people');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;
    const people = parseInt(peopleInput.value);

    // Basic validation
    if (!name || !email || !date || !time || isNaN(people)) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // People limit
    if (people < 1 || people > 20) {
      alert("Please enter between 1 and 20 people.");
      return;
    }

    // Success
    alert("Table booked successfully!");
    form.reset();
  });
});
