document.addEventListener("DOMContentLoaded", function () {
    // 觀察者選項
    const options = {
      root: null, // 使用視窗作為根元素
      rootMargin: "0px",
      threshold: 0.1, // 當 10% 的元素可見時觸發
    };

    // 創建一個 IntersectionObserver 觀察器
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 當元素進入視窗時，添加 'show' 類別
          entry.target.classList.add("show");
          entry.target.classList.remove("hide-out"); // 確保移除 'hide-out' 類別
        } else {
          // 當元素移出視窗時，添加 'hide-out' 類別
          entry.target.classList.add("hide-out");
          entry.target.classList.remove("show"); // 確保移除 'show' 類別
        }
      });
    }, options);

    // 觀察需要動畫的每個元素
    const elements = document.querySelectorAll("p, .card, table, .path-img, li, h5, h2");
    elements.forEach((element) => {
      // 確保卡片和表格在初始狀態下有 'hide' 類別
      element.classList.add("hide");
      observer.observe(element);
    });
  });