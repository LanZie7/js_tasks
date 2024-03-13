/**

ЗАДАЧА 1

Наши сотрудники хотят бейджики, поэтому нужно написать функцию, которая поможет нам их создавать.

На вход она ждет имя и фамилию, а возвращает объект вида: 
{ firstName, lastName, fullName }, где каждое свойство можно читать и менять.

Если предметом изменений является firstName или lastName, то правим fullName. Если же это fullName, то заменяем firstName и lastName.
*/

// Решение 1
// const createBadge = (firstName, lastName) => {
//     let _firstName = firstName;
//     let _lastName = lastName;

//     return {
//         get firstName() {
//             return _firstName;
//         },
//         set firstName(newFirstName) {
//             _firstName = newFirstName;
//             this.fullName = `${_firstName} ${_lastName}`;
//         },
//         get lastName() {
//             return _lastName;
//         },
//         set lastName(newLastName) {
//             _lastName = newLastName;
//             this.fullName = `${_firstName} ${_lastName}`;
//         },
//         get fullName() {
//             return `${_firstName} ${_lastName}`;
//         },
//         set fullName(newFullName) {
//             const [newFirstName, newLastName] = newFullName.split(' ');
//             if(newFirstName && newLastName) {
//                 _firstName = newFirstName;
//                 _lastName = newLastName;
//             } else {
//                 console.log('Invalid fullName format');
//             }
//         }
//     };
// };


// Решение 2
const createBadge = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(val) {
            const dividedName = val.split(' ');
            if (dividedName.length !== 2) {
            console.log('Error: invalid fullName format');
            }
            [this.firstName, this.lastName] = dividedName;
        },
    };
};

const badge = createBadge("Иван", "Иванов");

console.log(badge.firstName); // Иван
console.log(badge.lastName); // Иванов
console.log(badge.fullName); // Иван Иванов

badge.firstName = 'Константин';

console.log(badge.firstName); // Константин
console.log(badge.lastName); // Иванов
console.log(badge.fullName); // Константин Иванов

badge.lastName = 'Петров';

console.log(badge.firstName); // Константин
console.log(badge.lastName); // Петров
console.log(badge.fullName); // Константин Петров

badge.fullName = 'Илон Маск';

console.log(badge.firstName); // Илон
console.log(badge.lastName); // Маск
console.log(badge.fullName); // Илон Маск

badge.fullName = 'ИлонМаск'; // Error: invalid fullName format