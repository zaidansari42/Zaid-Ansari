'use strict';

const highlightAfterPageLoad = function () {
  window.addEventListener('load', () => {
    const [main] = document.getElementsByTagName('main');

    const currentWebpage = main.getAttribute('id');

    //   Function to get the file name and its first letter

    //   const [location] = window.location.href.split('/').slice(-1);

    //   const fileName = location.split('.');

    //   fileName.pop();

    //   const x = fileName.join('');

    const navLinks = document
      .querySelector('#navbarNav')
      .querySelectorAll('.nav-link');

    navLinks.forEach((nav) => {
      const navigationLink = nav.textContent.toLowerCase().split(' ')[0];

      if (navigationLink == currentWebpage.toLowerCase()) {
        nav.classList.add('highlight-indigo');
      } else {
        nav.classList.remove('highlight-indigo');
      }
    });
  });
};

highlightAfterPageLoad();
