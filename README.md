# Example Usage of Callback functions

A callback function is a function passed into another function as an argument. It is generally invoked inside the outer function to finish some sort of actions or routine.

## Sorting an Array by asc/desc order

Below is a sort array function that has a callback function. The user passes in two parameters: 

```shell
- string indicating whether it is ascending or descending order
- string indicating what field the array is sorted by
```

Base on these two parameters we can determine how the array will be sorted.

## Make calculation base on operator

I have also created two functions: calcu and calcuCallback. Calcu takes an operator and calls the reduce function to add, subtract, multiply, or divide all the numbers in an array.

On the other hand we can take in a callback function and call it instead. We can provide a callback function along with the array in which the callback function calls by. The biggest advantage of this is we do not have to create extra if conditions to check for the operator. Instead we can just invoke the callback function and let it handle its operation with the given array.

## Additional Note

You can always merge the values of different objects into one single object via the spread operator:

```shell
let mergeObj =(a,b,c) => {
    return {...a, ...b, ...c};
}
```