'use strict';
 {

  /* ========== ドロワーメニュー ========== */
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('menu-btn').classList.toggle('active');
    document.getElementById('header-menu').classList.toggle('active');
    
  });

  /* ========== fade in ========== */
  const targetFade = document.querySelectorAll('.fadein');

  document.addEventListener('scroll', () => {
    for (let i = 0; i < targetFade.length; i++) {
      const elementFade = targetFade[i].getBoundingClientRect().top + targetFade[i].clientHeight * .3;
      if (window.innerHeight > elementFade) {
        targetFade[i].classList.add('fade');
      }
    }
  });

  /* ========== 宿泊予約 モーダル  ========== */
  function noScroll(event) {
    event.preventDefault();
  } // touchmoveを操作させないための関数

  document.querySelector('.reservation-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.reservation-wrapper').classList.add('open');
    document.querySelector('.mask').classList.add('active');
    document.querySelector('body').classList.add('noscroll'); // スクロール禁止
    document.addEventListener('touchmove', noScroll, {
      passive: false
    }); // タッチスクロール禁止
  });

  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.reservation-wrapper').classList.remove('open');
    document.querySelector('.mask').classList.remove('active');
    document.querySelector('body').classList.remove('noscroll'); // スクロール禁止
    document.removeEventListener('touchmove', noScroll, {
      passive: false
    }); // 設定したイベントリスナーを解除
  });

  document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.mask').classList.remove('active');
    document.querySelector('.reservation-wrapper').classList.remove('open');
    document.querySelector('body').classList.remove('noscroll'); // スクロール禁止
    document.removeEventListener('touchmove', noScroll, {
      passive: false
    }); // 設定したイベントリスナーを解除
  });

  // 最近のブラウザでは、preventDefaultを正常に使うために、イベントリスナに{ passive: false }を設定する必要がある。

  /* ========== カレンダー ========== */
  flatpickr.l10ns.ja.firstDayOfWeek = 0;
  
  const config = {
    local: 'ja',
    minDate: "today",
    mode: "range",
    dateFormat: "Y-m-d"
  }
  
  flatpickr('.flatpickr', config);
    
}