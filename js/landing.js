function toggleMobileMenu() {
                const mobileMenu = document.getElementById('mobileMenu');
                const toggleIcon = document.querySelector('.toggle i');
                
                mobileMenu.classList.toggle('open');
                
                // Toggle between hamburger and X icon
                if (mobileMenu.classList.contains('open')) {
                    toggleIcon.classList.remove('fa-bars');
                    toggleIcon.classList.add('fa-xmark');
                } else {
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            }

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const mobileMenu = document.getElementById('mobileMenu');
                const toggle = document.querySelector('.toggle');
                const navBar = document.querySelector('.nav-bar');
                
                if (!navBar.contains(event.target) && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    document.querySelector('.toggle i').classList.remove('fa-xmark');
                    document.querySelector('.toggle i').classList.add('fa-bars');
                }
            });