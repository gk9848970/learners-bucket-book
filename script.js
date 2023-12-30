const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};
const promises = [
  asyncTask(3),
  asyncTask(0),
  asyncTask(2),
];

// What we want
Promise.resolve().then(() => {
    return promises[0].then(res => {
        console.log(res);
    })
})
/** 
 * This .then will only execute when last promise is returns a fulfilled promise
 * When nothing explicity is returned in a .then, A fulfilled promise with undefined 
 * value is returned.
 * But here we have returned another promise inside the .then so the below then
 * will execute only when that returned promise is resolved
*/
.then(() => {
    return promises[1].then(res => {
        console.log(res);
    })
})
.then(() => {
    return promises[2].then(res => {
        console.log(res);
    })
})

const sequencePromiseExecution = function (promises) {
    promises.reduce((prev, curr) => {
        return prev.then(() => {
            return curr.then(res => {
                console.log(res);
            });
        })
    }, Promise.resolve());
}

// asyncSeriesExecuter(promises);
// sequencePromiseExecution(promises);
