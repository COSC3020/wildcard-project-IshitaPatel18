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

// const testPrimecount

// const testFib

// const testMultiTest

