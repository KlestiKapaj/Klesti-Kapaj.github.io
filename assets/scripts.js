document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = `${value}%`;
    });
});


document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = `${value}%`;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute("aria-valuenow");
                bar.style.width = `${value}%`;
                observer.unobserve(bar); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});


document.querySelector(".show-all").addEventListener("click", function() {
    const hiddenProjects = document.querySelectorAll(".project-tile.hidden");
  
    hiddenProjects.forEach(function(project) {
      project.classList.remove("hidden");
    });
  
    // Optionally hide the "Show All" button after showing all projects
    this.style.display = "none";
  });
  
  document.querySelector(".show-all").addEventListener("click", function() {
    const hiddenProjects = document.querySelectorAll(".project-tile.hidden");
  
    hiddenProjects.forEach(function(project) {
      project.classList.remove("hidden");
    });
  
    this.style.display = "none";
  });
  