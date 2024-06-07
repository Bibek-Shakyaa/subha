document.addEventListener('DOMContentLoaded', function () {
  function initializeSplide(direction) {
    var main = new Splide('#txtSplide', {
      direction: 'rtl',
      type: 'loop',
      rewind: true,
      paginationDirection: 'rtl',
      pagination: false,
      flickMaxPages: 1,
      perPage: 1,
      updateOnMove: true,
      breakpoints: {
        768: {
          arrows: false,
        },
      },
    });

    var thumbnails = new Splide('#imgSplide', {
      direction: 'rtl',
      gap: 50,
      type: 'loop',
      omitEnd: (Boolean = false),
      start: 0,
      rewind: true,
      pagination: false,
      arrows: false,
      isNavigation: true,
      flickMaxPages: 1,
      perPage: 3,
      updateOnMove: true,
      lazyload: 'sequential',
      focus: 0,

      breakpoints: {
        768: {
          perPage: 1,
          arrows: true,
        },
      },
    });

    var mini = new Splide('#imgSplideMini', {
      direction: direction,
      direction: 'rtl',
      gap: 10,
      rewind: true,
      pagination: false,
      arrows: false,
      isNavigation: true,
      flickMaxPages: 1,
      perPage: 5,
      updateOnMove: true,
      lazyload: 'sequential',
      paginationDirection: direction,
      breakpoints: {
        768: {
          perPage: 2,
          arrows: true,
        },
      },
    });

    var mini2 = new Splide('#imgSplideMiniLeft', {
      direction: direction,
      direction: 'rtl',
      gap: 10,
      rewind: true,
      pagination: false,
      arrows: true,
      isNavigation: true,
      flickMaxPages: 1,
      perPage: 1,
      updateOnMove: true,
      lazyload: 'sequential',
      paginationDirection: direction,
      breakpoints: {
        768: {
          arrows: false,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
    mini.sync(mini2);
    mini.mount();
    mini2.mount();
  }

  // Initial initialization with default direction
  initializeSplide('rtl');

  document
    .getElementById('changeLanguageButton')
    .addEventListener('click', function () {
      // Toggle the direction
      const root = document.documentElement;
      const body = document.body;
      const isRtl = root.style.direction === 'rtl';
      const newDirection = isRtl ? 'rtl' : 'rtl';

      // Change the direction in the root element
      root.style.direction = newDirection;

      // Toggle the arabic class on the body element
      body.classList.toggle('arabic');

      // Re-initialize Splide instances with the new direction
      document.querySelectorAll('.splide').forEach((instance) => {
        instance.splide.destroy(); // Destroy current instances
      });

      initializeSplide(newDirection);
    });
});
