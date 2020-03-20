const menuBtn = document.querySelector('.menu-btn');
console.log('clicked me',menuBtn)
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    console.log('clicked me')
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
