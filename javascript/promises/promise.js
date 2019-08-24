const promise =
  new Promise((resolve, reject) => {
    // resolve('resolvido');
    reject('rejeitado')
  })
    .then(value => {
      console.log(value);
    })
    .catch(err => {
      console.log(err);
    });

const promise2 = Promise.reject('rejeitado') //  Promise.resolve('resolvido')
  .then(value => {
    console.log(value);
    return value + 1;
  })
  .then(value => {
    // throw 'erro!'
    console.log(value);
    return value + 2;
  })
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });