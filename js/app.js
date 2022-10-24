const eleSquares = document.querySelector('.squares');

for (i=1; i<=100; i++) {
    if (i % 15 == 0){
    //   console.log('FizzBuzz');
      eleSquares.innerHTML += `<div class="sq fizzbuzz">${'FizzBuzz'}</div>`;
    } else if (i%3 == 0) {
    //   console.log('Fizz');
      eleSquares.innerHTML += `<div class="sq fizz">${'Fizz'}</div>`;
    } else if(i%5 == 0) {
    //   console.log('Buzz');
      eleSquares.innerHTML += `<div class="sq buzz">${'Buzz'}</div>`;
    } else {
        eleSquares.innerHTML += `<div class="sq">${i}</div>`;
    }
  }