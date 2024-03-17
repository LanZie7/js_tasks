const fetchMock = () => {
    return new Promise((_, reject) => {
        console.log('jsgrill');
        setTimeout(reject, 1000);
    });
}


/**
 * @param {Number} retry
 * @returns {Promise}
 */

const withRetry = (retry = 3) => {
    return new Promise((resolve, reject) => {
        const retryRequest = (attempt) => {
            fetchMock().then(resolve).catch((error) => {
                if(attempt < retry) {
                    console.log(`Retrying request, attempt ${attempt + 1}`);
                    retryRequest(attempt + 1); // Рекурсивный вызов retryRequest
                } else {
                    reject(error);
                }
            });
        };

        retryRequest(1); // Запуск первой попытки
    });
}
  
  
withRetry()
    .then(() => console.log('resolved'))
    .catch((error) => console.log(error));