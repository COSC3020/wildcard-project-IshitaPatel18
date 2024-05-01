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
  }
    
// const testsum

// const testPrimecount

// const testFib

// const testMultiTest

