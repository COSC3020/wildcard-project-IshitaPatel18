[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

# Problem I'm Solving

I wanted to work with parallelism because I felt like it was my weakest skill, so I wanted to
see if I could just play around with map and reduce. I implemented the 3 problems we discussed
in class and then I created 2 more. I made one that will find the fibonacci value for a random array
of numbers and then I created one that is more focused on multiplication in the reduce portion
because it is an associative operation, but it involves map and reduce as I wanted to try another
example with both.

# How I'm doing it

For counting the length of each string in an array of strings, I only needed .map because 
it returns the length of each string. For the summation of all the elements in an array,
I only needed .reduce because it was an associative operation that was being performed.
The primeCount one was my favorite to work on because it helped me realize that the .map
can involve the most complicated work possible as it is being applied to all elements in parallel
and then the .reduce was used to count the 0's and 1's returned to see the total prime count.
The ability to do something more complicated in .map is why I decided to do the iterative version
of fibonacci, which only requires .map because I didn't need to perform an operation on the
fibonacci numbers returned. Then I decided to try using .reduce to do multiplication
instead of addition, which was used in the previous examples, but I wanted another example
that used both .map and .reduce, so I performed division in .map and multiplication in .reduce. 
For testing, I used callbacks, which I learned from the async functions exercise, to assert
the tests by comparing the results from parallel execution to the results from computation by for loops.
