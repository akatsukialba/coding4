'use strict';
{

  /* ========== tabs ========== */
  
  const tabs = document.querySelectorAll('.info-tabs li a');
  const contents = document.querySelectorAll('.info-contents');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
      e.preventDefault();
      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
      }
      for (let j = 0; j < contents.length; j++) {
        contents[j].classList.remove('active');
      }
      tabs[i].classList.add('active');
      contents[i].classList.add('active');
    });
  }
}