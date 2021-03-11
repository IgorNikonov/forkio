
const header = document.getElementsByTagName('header')[0];
const burgerMenuMobile = document.createElement("menu");
      burgerMenuMobile.className = 'burger-menu-mobile';
const burgerMenuSwitch = document.getElementsByClassName("main-nav__burger-menu-tab")[0];
const burgerMenu = `    <li class="burger-menu-mobile__item"><a href="#">Overview</a></li>
    <li class="burger-menu-mobile__item"><a href="#">About Fork</a></li>
    <li class="burger-menu-mobile__item"><a href="#">Buying Options</a></li>
    <li class="burger-menu-mobile__item"><a href="#">Support</a></li>`;

const showMobileBurgerMenu=()=>{
    burgerMenuSwitch.setAttribute('src', 'src/img/burger-menu-close-tab.svg');
    burgerMenuMobile.innerHTML = burgerMenu;
    header.append(burgerMenuMobile);
    burgerMenuMobile.classList.toggle('active',true);
};

const hideMobileBurgerMenu=()=>{
    burgerMenuSwitch.setAttribute('src', "src/img/burger-menu-start-tab.png");
    burgerMenuMobile.classList.toggle('active',false);
};


burgerMenuSwitch.addEventListener('mouseover', showMobileBurgerMenu);
burgerMenuSwitch.addEventListener('touchstart', showMobileBurgerMenu);
burgerMenuSwitch.addEventListener('click', hideMobileBurgerMenu);

console.log('выполнен 001_burger_menu_switch.js');
console.log('выполнен 002_main.js');