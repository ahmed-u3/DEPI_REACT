const promise = new Promise((res, rej) => {
  let isTrue = true;

  setTimeout(() => {
    if (isTrue) {
      res("data is true");
    } else {
      rej("data is false");
    }
  }, 2000);
});

// console.log(promise);

promise
  .then(res => {
    console.log(res);
    return {
      id: 1,
      res: res,
    };
  })
  .then(res => console.log(res))
  .catch(err => console.log("Error===> ", err))
  .finally(() => console.log("Done....."));
