//* header submenu :
//! men-menu :
const menMenu = document.querySelector('.men-menu');
const menSubmenu = document.querySelector('.men-submenu');

menMenu.addEventListener('mouseover', () => {
  menSubmenu.style.display = "inline-block";
})
menMenu.addEventListener('mouseout', () => {
  menSubmenu.style.display = "none";
})
//-------------------------------------------------------
//! women-menu :
const womenMenu = document.querySelector('.women-menu');
const womenSubmenu = document.querySelector('.women-submenu');

womenMenu.addEventListener('mouseover', () => {
  womenSubmenu.style.display = "inline-block";
})
womenMenu.addEventListener('mouseout', () => {
  womenSubmenu.style.display = "none";
})
//-------------------------------------------------------
//! jewelry-menu :
const jewelryMenu = document.querySelector('.jewelry-menu');
const jewelrySubmenu = document.querySelector('.jewelry-submenu');

jewelryMenu.addEventListener('mouseover', () => {
  jewelrySubmenu.style.display = "inline-block";
})
jewelryMenu.addEventListener('mouseout', () => {
  jewelrySubmenu.style.display = "none";
})
//-------------------------------------------------------