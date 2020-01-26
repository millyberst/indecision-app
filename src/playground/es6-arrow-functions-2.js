// arguments object - no longer bound with arrow functions

const add =  (a, b) => {
    // console.log(arguments); argument not available with arrow functions
    return a + b;
}

console.log(add(56,1))
// this keyword -no longer bound

const user = {
    name: 'Milly',
    cities: ['Cape Town', 'Caracas', 'Almelo'],
    // printPlacesLived: function () { es5
    printPlacesLived () { // es6
        return this.cities.map((city) => this.name + ' has lived in' + city);
      
        // this.cities.forEach((city) => {
        //     console.log(this.name+ ' has lived '+ city)
        // });
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,3,4],
    multiplyBy: 5,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());