/** 

ЗАДАЧА 2

Полифилим Promise.all

Нужно реализовать идентичный метод, не используя другие методы класса.

Вот некоторый особенности, которые помогут тебе начать:
  - метод принимает массив промисов;
  - метод возвращает промис;
  - метод ждет fullfield всех переданных промисов,
  - и отдает результат в той же последовательности,
  - либо, первый результат с реджектом.
*/


/**
 * @param {Number} delay
 * @returns {Promise}
 */


const fetchMock = (delay) =>
    new Promise((resolve) => setTimeout(() => resolve(delay), delay));


/**
 * @param {Promise[]} promises
 * @returns {Promise}
 */

const promiseAll = (promises) => {
    const fulfilledPromises = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((el, idx) => {
            el.then((data) => {
                fulfilledPromises[idx] = data;
                if(count === promises.length - 1) {
                    resolve(fulfilledPromises);
                }
                count++;
            }).catch(error => reject(error));
        });
    })

};

promiseAll([fetchMock(800), fetchMock(500)])
  .then((data) => console.log(data))
  .catch((error) => console.log([error]));
// [800, 500]

promiseAll([fetchMock(200), fetchMock(100), Promise.reject('error')])
  .then((data) => console.log(data))
  .catch((error) => console.log([error]));
// ['error']