// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

const unicornImg = document.getElementsByClassName('inflate-an-image')

//write function and call it with onclick method - gets called every time you click on a unicorn

function inflate(e) {
  const unicorn = e.target
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

for (let i = 0; i < unicornImg.length; i++) {
  unicornImg[i].onclick = inflate
}
