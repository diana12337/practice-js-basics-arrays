const randomArray = createRandomArray();
console.log(randomArray);



// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

for (let t = 0; t < randomArray.length; t++) {
    console.log(randomArray[t]);
}

randomArray.forEach(function(element) {
    console.log(element);
  })
  
  
function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for (let i = 0; i < len; i++) {
        arr.push(getRandomInteger(1, 100));
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


let item = randomArray.length - 1;
  
console.log('last item is ' + randomArray[item]);