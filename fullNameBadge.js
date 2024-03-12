/**

Задача 1

Наши сотрудники хотят бейджики, поэтому нужно написать функцию, которая поможет нам их создавать.

На вход она ждет имя и фамилию, а возвращает объект вида: 
{ firstName, lastName, fullName }, где каждое свойство можно читать и менять.

Если предметом изменений является firstName или lastName, то правим fullName. Если же это fullName, то заменяем firstName и lastName. На примере с кодом станет понятнее.
*/

const createBadge = (firstName, lastName) => {
    let fullName = `${firstName} ${lastName}`;

    return {
        get firstName() {
            return firstName;
        },
        set firstName(newFirstName) {
            firstName = newFirstName;
            fullName = `${firstName} ${lastName}`;
        },
        get lastName() {
            return lastName;
        },
        set lastName(newLastName) {
            lastName = newLastName;
            fullName = `${firstName} ${lastName}`;
        },
        get fullName() {
            return fullName;
        },
        set fullName(newFullName) {
            const nameParts = newFullName.split(' ');
            firstName = nameParts[0];
            lastName = nameParts[1];
            fullName = newFullName;
        }
    };
};


const badge = createBadge('Lana', 'Bochkova');
console.log(badge.firstName); // Lana
console.log(badge.lastName); // Bochkova
console.log(badge.fullName); // Lana Bochkova