// Highlight active page link in navigation
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
  
  // Simple form handling (if form added later)
  function showContactSuccess() {
    alert("Your message has been sent successfully!");
  }
  
  // Optional: Add smooth scroll if you use anchors later
  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth'
  //     });
  //   });
  // });
  