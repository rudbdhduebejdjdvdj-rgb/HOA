(() => {
  const switcher = document.querySelector('.language-switch');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  let language = 'es';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-es][data-en]').forEach((element) => {
      const value = element.getAttribute('data-' + language);
      if (value !== null) element.innerHTML = value;
    });
    document.querySelector('.lang-current').textContent = language.toUpperCase();
    document.querySelector('.lang-next').textContent = language === 'es' ? 'EN' : 'ES';
    switcher.setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar a español');
    menuButton.setAttribute('aria-label', language === 'es' ? 'Abrir menú' : 'Open menu');
  }

  switcher.addEventListener('click', () => setLanguage(language === 'es' ? 'en' : 'es'));
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();