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

