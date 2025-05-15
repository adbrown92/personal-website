const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenus()
}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

// function switchMode() {
//     document.body.classList.toggle('dark');
// }
// original code, replaced with below to make the mode stick on tab switch

function switchMode() {
         var theme = localStorage.getItem('theme');
         var html = document.querySelector('html');
         // choose new theme
         if (theme === 'dark') {
            new_theme = 'light';
         } else {
            new_theme = 'dark';
         }
         // remove previous class
         html.classList.remove(theme);
         // add new class
         html.classList.add(new_theme);
         // store theme
         localStorage.setItem('theme', new_theme);
      }

window.addEventListener('load', function () {
         var theme = localStorage.getItem('theme');
         // when first load, choose an initial theme
         if (theme === null || theme === undefined) {
            theme = 'light';
            localStorage.setItem('theme', theme);
         }
         // set theme
         var html = document.querySelector("html");
         // apply the variable
         html.classList.add(theme);
      })