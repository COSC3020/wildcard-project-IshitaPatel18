const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const testSum =
  jsc.forall("array nat", function(n){
    let count = 0;
    for(let i = 0; i < n.length; i++)
      {
        count++;
      }
    sum(n, function(value){
      assert(value == count)
    })
  });
    
const testCount =
  jsc.forall("array string", function(n){
    let size = [];
    for(let i = 0; i < n.length; i++)
      {
        size[i] = n[i].length;
      }
    count(n, function(value){
      assert(value == size)
    })
  });

const testPrimeCount =
    jsc.forall("array nat", function(n){
      let total = 0;
      let check = true;
      for(let i = 0; i < n.length; i++)
        {
          if(n[i] > 1){
              let i = 2;
              while(check == true && i < n.length){
                  if(item % i == 0){
                    total++;
                    check = false;
                  } else {
                    i++;
                  }
                }
          }
        }
    primeCount(n, function(value){
      assert(value == total)
    })
  });

const testFib =
   jsc.forall("array nat", function(n){
     for(let i = 0; i < n.length; i++)
       {
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
       }
    fib(n, function(value){
      assert(value == fib)
    })
  });
// const testMultiTest

