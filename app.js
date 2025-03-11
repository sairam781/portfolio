const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// sending thround email when i click send message
  document.getElementById("contactForm").addEventListener("submit", function(event) {
	event.preventDefault();  // Prevent the default form submission
  
	// Show "Sending..." text
	let submitButton = document.querySelector(".submit-btn");
	submitButton.innerHTML = "Sending...";
  
	// Delay the success message for smooth animation
	setTimeout(function() {
	  // Show success message
	  document.getElementById("successMessage").style.display = "block";
	  document.getElementById("successMessage").classList.add("fadeInSuccess");
  
	  // Hide the form after submission
	  document.querySelector(".contact-form").style.display = "none";
  
	  // Reset the button text
	  submitButton.innerHTML = "Message Sent!";
	}, 1000);
  });
