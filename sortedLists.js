/** 
 * Задача 1.
 * Даны два отсортированных списка (по возрастанию), длина которых a и b.
 * Нужно создать функцию, которая будет на выходе иметь один общий отсортированный список res (по убыванию). 
 * Пользоваться sort или иными функциями для сортировки ЗАПРЕЩЕНО!
 * 
*/

function sortedLists(a, b) {
    let res = [];
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 && j >= 0) {
        if (a[i] > b[j]) {
            res.push(a[i]);
            i--;
        } else {
            res.push(b[j]);
            j--;
        }
    }

    while (i >= 0) {
        res.push(a[i]);
        i--;
    }

    while (j >= 0) {
        res.push(b[j]);
        j--;
    }

    return res;
}