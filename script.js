document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu functionality
    const navItems = document.querySelectorAll('.nav-menu li');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tabs span');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically load different content based on the selected tab
            console.log('Selected tab:', this.textContent.trim());
        });
    });
    
    // Course card hover effect
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Play button click simulation
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Get the course title
            const courseTitle = this.closest('.course-card').querySelector('h3').textContent;
            
            // Simulate starting the course
            alert(`Starting ${courseTitle} course...`);
        });
    });
    
    // User profile dropdown simulation
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', function() {
        alert('User profile options would appear here');
    });
    
    // Notification click simulation
    const notification = document.querySelector('.notification');
    
    notification.addEventListener('click', function() {
        alert('Notifications would appear here');
    });
    
    // Join course button simulation
    const joinBtn = document.querySelector('.join-btn');
    
    joinBtn.addEventListener('click', function() {
        alert('Join a new course dialog would appear here');
    });
    
    // Upgrade button simulation
    const upgradeBtn = document.querySelector('.upgrade-btn');
    
    upgradeBtn.addEventListener('click', function() {
        alert('Upgrade to PRO subscription page would appear here');
    });
    
    // Download buttons simulation
    const downloadButtons = document.querySelectorAll('.download-buttons button');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const store = this.classList.contains('play-store') ? 'Google Play Store' : 'Apple App Store';
            alert(`Redirecting to ${store}...`);
        });
    });
    
    // Search functionality simulation
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert(`Searching for: ${this.value}`);
        }
    });
});