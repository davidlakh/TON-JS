// назначаем обработчик на всю страницу
// даём понять JS что сейчас будет загружаться страница
// строем ДОМ дерво
// это событие срабатывает тогда полностью загрузилать ДОМ структура
// создаём функцию, именно здесь будет находиться весь код
window.addEventListener('DOMContentLoaded', function () {

// переводим весь код в строгий режим
    'use strict';

// создайм переменные и в них сохраняем селекторы
    // классы с реальными табами подставить сюда
    let tab = document.querySelectorAll('.info-header-tab'),

// родитель всех ...tab
        // блок с tabs помещается сюда
        info = document.querySelector('.info-header'),
        // контент который будет переключатся между tabs помещаем сюда
        tabContent = document.querySelectorAll('.info-tabcontent');


// функция котороая скрывает наши tabs
    function hideTabContent(a) {
// код будет автоматически подстраиваться под количество элементов
        for (let i =a; i < tabContent.length; i++) {
            //  при каждом проходе цикла, будем использовать tab content
            // (с 1 по последний
            // удаление из них, класс show
            tabContent[i].classList.remove('show');
            // после удаления класса
            tabContent[i].classList.add('hide');
        }
    }

    //запуск функции подставляем значение 1 вместо а, цикл начинается с 1
    hideTabContent(1);

    // b показ именно того, что нам необходимо
    function showTabContent(b) {
        // действительно ли этот элемент скрыт
        if (tabContent[b].classList.contains('hide')) {
            // удаляем
            tabContent[b].classList.remove('hide');
            // добавляем
            tabContent[b].classList.add('show');
        }
    }

    // назначение обр. события при клике
    info.addEventListener('click', function (event) {
        let target = event.target;
        // проверяю действительно ли я кликнул на элемент
        // классы с реальными табами подставить сюда
        if (target && target.classList.contains('info-header-tab')) {
            for (let i =0; i < tab.length; i++) {
                if (target == tab[i]) {
                    //скрываем все табы
                    hideTabContent(0);
                    //показать только тот который совпадает
                    showTabContent(i);
                    //выход из цикла
                    break;
                }
            }
        }
    })
});