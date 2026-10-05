const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.getElementById('navMenu');
menuBtn?.addEventListener('click', () => navMenu.classList.toggle('open'));

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
