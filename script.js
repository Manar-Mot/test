document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const closeButton = document.querySelector(".close-button");
    const navbarLinks = document.querySelector(".overlay");
    const navItems = document.querySelectorAll(".navbar-links ul li");
  
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
      });
    }
  
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
      });
    }
  
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        const selected = document.querySelector(".navbar-links ul li.selected");
        if (selected) selected.classList.remove("selected");
        item.classList.add("selected");
        navbarLinks.classList.remove("active");
      });
    });
  
    function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
  
      // إزالة فئة "active" من جميع التبويبات
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
      }
  
      // إزالة فئة "active" من جميع الروابط
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      // إضافة فئة "active" إلى التبويب الحالي
      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.className += " active";
    }
  
    // اجعل الدالة متاحة في النطاق العام
    window.openTab = openTab;
  
    // افتح التبويب الأول افتراضيًا
    document.querySelector(".tablink").click();
  });
  