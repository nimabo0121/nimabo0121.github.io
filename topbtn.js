document.getElementById('topBtn').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動
    });
  });
  
  // 當頁面滾動時顯示/隱藏 top 按鈕
  window.addEventListener('scroll', function () {
    const topBtn = document.getElementById('topBtn');
    if (window.scrollY > 100) { // 滾動超過 100px 顯示按鈕
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });
  