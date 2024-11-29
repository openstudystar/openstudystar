
    let lastScrollTop = 0; // Keep track of the last scroll position
    const navbar = document.querySelector('nav'); // Select the navbar

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // If the user scrolls down, hide the navbar, else show it
        if (currentScroll > lastScrollTop) {
            navbar.style.top = "-60px"; // Move navbar out of view (adjust this value as needed)
        } else {
            navbar.style.top = "0"; // Bring navbar back to the top
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
    });

