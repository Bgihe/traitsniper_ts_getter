function checkAndClick() {
  const modalSection = document.querySelector('section.text-center');
  const closeButton = document.querySelector('div.modal_close__oi1TW');
  const button = document.querySelector('a.btn.btn-highlights');

  if (modalSection && closeButton) {
    console.log('Modal found. Clicking close button...');
    closeButton.click();
    setTimeout(function () {
      checkAndClick();
    }, 5000); // 五秒後重新檢查
  } else if (button) {
    console.log('Button found. Clicking...');
    button.click();
  } else {
    console.log('Button not found.');
  }
}

setInterval(function () {
  checkAndClick();
}, 5000); // 每隔五秒執行一次檢查和點擊