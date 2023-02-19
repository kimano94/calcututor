// переменная, в которой храниться выбранное математическое действие
var op

// функция рассчета
function func() {
    // переменная результата
    var result
    // получаем первое и второе числа
    var num1 = Number(culc.num1.value)
    var num2 = Number(culc.num2.value)
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
        default:
            break;
    }
}