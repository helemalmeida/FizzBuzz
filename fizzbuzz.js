function fizzBuzz(entrada) {
    if ((entrada % 3 == 0) && (entrada % 5 == 0))
    return 'fizzBuzz';
    else if (entrada % 3 == 0) {
    return 'fizz';
    }
    else if (entrada % 5 == 0) {
    return 'buzz';
    }
    else 
    return entrada;
}

const resultado = fizzBuzz(15);
console.log(resultado);


// let i=1;
// while (i<=50) {

// function fizzBuzz() {
// if(i%3===0 && i%5===0){
// console.log("fizzBuzz");
// }else if(i%3===0){
// console.log("fizz");
// }else if(i%5===0){
// console.log("buzz");
// }else{
// console.log(i);
// }

//  i++;

// }

// fizzBuzz();
// }