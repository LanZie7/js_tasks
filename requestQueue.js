/**

ЗАДАЧА 3

**Шина запросов**

Есть массив эндпоинтов, которые необходимо опросить,
сделав это посредством параллельных асинхронных запросов.
В любой момент времени количество запросов не должно превышать установленный лимит.
Как только один из них разрешился сразу отправляем следующий.
По завершению вызываем коллбэк с результатом.
*/



/**
 * @param {String} endpoint
 * @returns {Promise}
 */
const fetchMock = (endpoint) => {
    console.log('fetched --> ' + endpoint);
    // 'fetched' '/3000'
    // 'fetched' '/error'
    // 'fetched' '/2000'
    // 'fetched' '/500'
    // 'fetched' '/600'
    
    const ms = Number(endpoint.slice(1));
  
    return new Promise((resolve, reject) => {
      if (endpoint === "/error" || Number.isNaN(ms)) {
        reject(endpoint);
      } else {
        setTimeout(() => {
          resolve(endpoint);
        }, ms);
      }
    });
  };
  
  
/**
1. Сначала создаем пустой массив результатов results.
2. Устанавливаем переменные running (отслеживает количество запросов, выполняющихся в данный момент)
и index (индекс текущего эндпоинта из массива endpoints) в 0.
3. Запускаем функцию run, которая начинает итерироваться по эндпоинтам и отправлять запросы.
4. В функции run мы проверяем, сколько запросов уже выполняется и не превышает ли это лимит. 
Если все ок, отправляем следующий запрос.
5. После выполнения каждого запроса уменьшаем счетчик running и вызываем снова функцию run, 
чтобы запустить следующий запрос.
6. После отправки всех запросов запускаем функцию checkComplete, 
которая следит за завершением всех запросов и вызывает коллбэк с результатом, 
когда все запросы завершены.
 
*/ 
 
  /**
   * @param {String[]} endpoints
   * @param {Function(data:String[])} callback
   * @param {Number} limit
   */

  const requestQueue = (endpoints, callback, limit = 3) => {
    const results = []
    let running = 0; // отслеживает количество запросов, выполняющихся в данный момент
    let index = 0; // индекс текущего эндпоинта из массива endpoints

    const run = () => {
      if(running >= limit || index >= endpoints.length) {
        return;
      }

      running++;
      const current = index;
      index++;

      fetchMock(endpoints[index])
        .then((data) => {
          results[current] = data;
        })
        .catch((error) => {
          results[current] = error;
        })
        .finally(() => {
          running--;
          run();
        });
    };

    run();

    // функция следит за завершением всех запросов и вызывает коллбэк с результатом, когда все запросы завершены
    const checkComplete = () => {
      if(results.length === endpoints.length) {
        callback(results)
      } else {
        setTimeout(checkComplete, 100);
      }
    };
    
    checkComplete();

  };
  
  requestQueue(
    ["/3000", "/3000", "/3000", "/error", "/2000", "/500", "/600", "/error"],
    (data) => console.log(data)
  );
  // ['/3000', '/3000', '/3000', '/error', '/2000', '/500', '/600', '/error']