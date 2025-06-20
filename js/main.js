(function(){
    // Dark mode functionality
    const darkModeToggle = document.querySelector('.r6gWSykp');
    const mobileMenuToggle = document.querySelector('.pVCLnuDG');
    const mobileMenu = document.querySelector('.qVr4vWxB');
    
    // Set dark mode as default
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply dark mode by default
    if (savedTheme === 'dark' || (!localStorage.getItem('theme') && prefersDark.matches)) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
    
    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
        let currentTheme;
        
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            currentTheme = 'light';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            currentTheme = 'dark';
        }
        
        localStorage.setItem('theme', currentTheme);
    });
    
    // Mobile menu functionality
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('k4a3pW84');
        
        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('k4a3pW84')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (
            mobileMenu.classList.contains('k4a3pW84') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)
        ) {
            mobileMenu.classList.remove('k4a3pW84');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('k4a3pW84')) {
            mobileMenu.classList.remove('k4a3pW84');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Anti-debugging and protection code
    (function(){
        const _0x1a2b = ['debugger', 'toString', 'constructor', 'call', 'apply'];
        const _0x3c4d = function(_0x5e6f) {
            return _0x1a2b[_0x5e6f];
        };
        
        // Disable right-click
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
                (e.ctrlKey && e.keyCode === 85)) {
                e.preventDefault();
                return false;
            }
        });
        
        // Detect DevTools
        let devtools = {open: false, orientation: null};
        setInterval(function() {
            const threshold = 160;
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    document.body.innerHTML = '<h1>Access Denied</h1>';
                }
            }
        }, 1000);
        
        // Console warning
        console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cThis is a protected website. Any attempts to inspect or modify the code will be logged.', 'color: red; font-size: 20px;');
    })();
})();
        