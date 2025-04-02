document.addEventListener('DOMContentLoaded', function() {
    // Local Storage for Calendar
    const allInputs = document.querySelectorAll('input[data-day]');
    
    allInputs.forEach(input => {
        const day = input.getAttribute('data-day');
        
        // Load saved activity
        input.value = localStorage.getItem(`workout-${day}`) || '';
        
        // Save activity on change
        input.addEventListener('change', function() {
            localStorage.setItem(`workout-${day}`, this.value);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileSideMenu = document.getElementById('mobileSideMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    mobileMenuToggle.addEventListener('click', function() {
        mobileSideMenu.classList.add('open');
    });

    closeMenuBtn.addEventListener('click', function() {
        mobileSideMenu.classList.remove('open');
    });

    // Close menu if clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileSideMenu.contains(event.target) && 
            event.target !== mobileMenuToggle && 
            mobileSideMenu.classList.contains('open')) {
            mobileSideMenu.classList.remove('open');
        }
    });
});