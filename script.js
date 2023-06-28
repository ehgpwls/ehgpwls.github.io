window.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu > li');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.querySelector('.submenu').style.display = 'block';
      });
    }
  });
  