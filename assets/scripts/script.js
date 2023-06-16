 // alert - обычное модальное окно
//  alert("Здраствуйте , вы попали на страничку Юки!")       
//  let namepeapl = (prompt("Введите имя пользователя"))
//  alert(`Приятно познакомиться,${namepeapl}`)
 
 
//  let element = document.getElementById('1');
//  console.log(element);
//  добавили класс
//  element.classList.add('active');
//  удалили класс
//  element.classList.remove('acteve')

let count= 0;
// все возможные наборы
function getRandomColor() {
    // получаем цвет в HEX формате
    let color = '#';
    // все цифры
    let variant = '0123456789ABCDEF';
    
    for (let i = 0; i < 6; i++) {
        // формируем рандомный цвет
        color += variant[Math.floor(Math.random() * 16)];
    }
    return color;
}
function chanchedColor() {
    // получаем массив
    let box = document.getElementsByClassName('box');
    // получаем первый элемент
    let element = box[0];
    // Math.random() * 10 - 0 до 1
    // if (count % 2 == 0) {
    //     // добавляем класс
    //     element.classList.add('activeBox');
    // }
    // else {
    //     element.classList.remove('activeBox');
    // }
    // count++;
    // для получения случайного цвета
    let randColor = getRandomColor();
    element.style.cssText=`background-color: ${randColor};`;
    // проверяет есть ли такой класс
    //element.classList.toggle('activeBox');
}

let bt = document.getElementById('bt');
// console.log(btn);
bt.addEventListener('click', chanchedColor);

