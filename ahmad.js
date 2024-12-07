document.querySelector('.nav-toggle').addEventListener('click', function() {
  // هنا تقوم بتبديل الفئة "nav-open" لتفعيل أو إغلاق القائمة
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-open');
});
