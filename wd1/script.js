// Get the navigation menu element
const navMenu = document.getElementById('main-nav');

// Add a scroll event listener to change the menu style when scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navMenu.style.backgroundColor = '#555'; // Change background color on scroll
  } else {
    navMenu.style.backgroundColor = '#333';
  }
});

// Add hover effect to menu items
const menuItems = navMenu.getElementsByTagName('a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('mouseover', () => {
    menuItems[i].style.color = '#ff9900'; // Change font color on hover
  });
  menuItems[i].addEventListener('mouseout', () => {
    menuItems[i].style.color = 'white'; // Restore font color when not hovering
  });
}