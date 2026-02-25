document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(function (link) {

    link.addEventListener('click', function (e) {


      e.preventDefault();

  
      navLinks.forEach(function (item) {
        item.classList.remove('active');
      });

      this.classList.add('active');

      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }

    });

  });

});
