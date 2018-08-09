document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

function toggleMenu(e) {
    var menubar = document.getElementsByClassName('nav-details')[0];
    menubar.classList.toggle('toggleMenu');
}

function dropDown(e) {
    var toggle = document.getElementsByClassName('dropDown-content')[0];
    toggle.classList.toggle(' dropDown-content--Show');
}