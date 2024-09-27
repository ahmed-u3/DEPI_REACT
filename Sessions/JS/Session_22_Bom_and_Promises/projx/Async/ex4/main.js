const promise1 = new Promise((res, rej) => {
  let isTrue = true;
  setTimeout(() => {
    if (isTrue) {
      res("data 1 is true");
    } else {
      rej("data 1 is false");
    }
  }, 1000);
});
const promise2 = new Promise((res, rej) => {
  let isTrue = true;
  setTimeout(() => {
    if (isTrue) {
      res("data 2 is true");
    } else {
      rej("data 2 is false");
    }
  }, 4000);
});
const promise3 = new Promise((res, rej) => {
  let isTrue = true;
  setTimeout(() => {
    if (isTrue) {
      res("data 3 is true");
    } else {
      rej("data 3 is false");
    }
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then(res => console.log(res))
  .catch(error => console.log("Error==> ", error))
  .finally(() => console.log("Done...."));

Promise.race([promise1, promise2, promise3])
  .then(res => console.log(res))
  .catch(error => console.log("Error==> ", error))
  .finally(() => console.log("Done...."));

Promise.allSettled([promise1, promise2, promise3]).then(res =>
  console.log(res)
);
