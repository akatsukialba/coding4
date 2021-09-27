'use strict';
{

  /* ========== headerの色変更 ========== */
  document.addEventListener('scroll', () => {
    const navElement = document.querySelector('header');
    const scroll = window.pageYOffset;
    
    if (scroll > 0) {
      navElement.classList.add('change');
    } else {
      navElement.classList.remove('change');
    }
  });
}