
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
const breakpoint_320 = '320px';
const breakpoint_480 = '480px';
const breakpoint_992 = '992px';
const breakpoint_1200 =  '1200px';


const resizeSwClasses=()=>{   /*  здесь меняем фоновые картинки в зависимости от ширины экрана */

    const frontHeader = document.getElementsByClassName('front-header')[0];
//  https://webdevblog.ru/rabotaem-s-media-zaprosami-cherez-javascript/
//  https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia

//     if (  window.matchMedia(`(max-width: ${layout_768_maxWidth})`).matches  ) { //можно по медиа-запросам
        if ( screen.width <= parseInt(breakpoint_480) ){    // а можно тоже самое делать через screen.width
        frontHeader.classList.toggle('front-header--mobile-mode', true);
        frontHeader.classList.toggle('front-header--tablet-mode', false);
        frontHeader.classList.toggle('front-header--tablet-LG-mode', false);
    }

    // ну ЗАХОТЕЛОСЬ мне сделать так, буд-то бы ЕЩЁ одна картинка на этом режиме есть!  ;-)
    else if ( window.matchMedia(`(min-width: ${parseInt(breakpoint_480)+1}px)`).matches &&
              window.matchMedia(`(max-width: ${breakpoint_1200})`).matches ) {
            frontHeader.classList.toggle('front-header--tablet-mode', true);
            frontHeader.classList.toggle('front-header--mobile-mode', false);
        frontHeader.classList.toggle('front-header--tablet-LG-mode', false);

    } else if (window.matchMedia(`(min-width: ${breakpoint_1200})`).matches) {
            frontHeader.classList.toggle('front-header--tablet-LG-mode', true);
            frontHeader.classList.toggle('front-header--mobile-mode', false);
        frontHeader.classList.toggle('front-header--tablet-mode', false);
    }
};
resizeSwClasses(); // один раз запустить по загрузке скрипта для задания нужных параметров для обнаруженного разрешения экрана

// чтобы налету постоянно пере-адаптировать к изменению ширины экрана в инспекторе, подключим 'onresize'    https://webfanat.com/article_id/?id=155
window.addEventListener('resize', resizeSwClasses); // нужен ТОЛЬКО для изменения окна в инспекторе, в реальной работе не требуется

