//* header submenu :
//! men-menu :
const menMenu = document.querySelector('.men-menu');
const menSubmenu = document.querySelector('.men-submenu');

menMenu.addEventListener('mouseover', () => {
  menSubmenu.style.top = "102%";
  menSubmenu.style.opacity = "1";
})
menMenu.addEventListener('mouseout', () => {
    menSubmenu.style.top = "200%";
    menSubmenu.style.opacity = "0";

})
//-------------------------------------------------------