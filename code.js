function sum(arr, callback) 
{
  let Parallel = require("paralleljs"),
    p = new Parallel(arr);
  p.reduce(function (sum) {
    return sum[0] + sum[1];
  })
    .then(callback);
}

function count(arr, callback) 
{
  let Parallel = require("paralleljs"),
    p = new Parallel(arr);
  p.map(function (element) {
    return element.length;
  })
    .then(callback);
}

function primeCount(arr, callback) 
{
  let Parallel = require("paralleljs"),
    p = new Parallel(arr);
  p.map(function (item) {
    if (item > 1) 
    {
      for (let i = 2; i < item; i++) 
      {
        if (item % i == 0) 
        {
          return 0;
        }
      }
      return 1;
    } 
    else 
    {
      return 0;
    }
  })
    .reduce(function (count) {
      return count[0] + count[1];
    })
    .then(callback);
}

function fib(arr, callback) 
{
  let Parallel = require("paralleljs"),
    p = new Parallel(arr);
  p.map(function (i) {
    let fib_old = 1;
    let fib = 1;
    let fib_new;
    while (i > 2) 
    {
      fib_new = fib + fib_old;
      fib_old = fib;
      fib = fib_new;
      --i;
    }
    return fib;
  })
    .then(callback);
}

function multiTest(arr, callback) 
{
  var Parallel = require("paralleljs"),
    p = new Parallel(arr);
  p.map(function (i) {
    if (i > 1) 
    {
      return Math.floor(i / 2);
    } 
    else 
    {
      return 1;
    }
  })
    .reduce(function (mult) {
      return mult[0] * mult[1];
    })
    .then(callback);
}
