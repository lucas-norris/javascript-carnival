// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicornImg = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicornImg.length; i++) {
  unicornImg[i].onclick = inflate
}

//write function and call it with onclick method - gets called every time you click on a unicorn

function inflate(e) {
  let unicorn = e.target
  if (unicorn.src.includes('images/unicorn-0.png')) {
    unicorn.src = './images/unicorn-1.png'
  } else if (unicorn.src.includes('images/unicorn-1.png')) {
    unicorn.src = './images/unicorn-2.png'
  } else if (unicorn.src.includes('images/unicorn-2.png')) {
    unicorn.src = './images/unicorn-3.png'
  } else {
    alert('Unicorn ' + unicorn.id + ' says thank you')
  }
}
