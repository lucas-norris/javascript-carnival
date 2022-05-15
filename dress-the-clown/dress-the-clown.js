// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const clownHead = document.getElementById('head')

const clownBody = document.getElementById('body')

const clownShoes = document.getElementById('shoes')

let headIndex = 0

let bodyIndex = 0

let shoesIndex = 0

let clothingIndex = 0

function changeClothingItemUp() {
  clothingIndex -= 1
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
}

function changeClothingItemDown() {
  clothingIndex += 1
  if (clothingIndex > 2) {
    clothingIndex = 0
  }
}

function changeClownHeadRight() {
  let headSrc = './images/head' + headIndex + '.png'
  clownHead.src = headSrc
  headIndex += 1
  if (headIndex > 5) {
    headIndex = 0
  }
}

function changeClownHeadLeft() {
  let headSrc = './images/head' + headIndex + '.png'
  clownHead.src = headSrc
  headIndex -= 1
  if (headIndex < 0) {
    headIndex = 5
  }
}

function changeClownBodyRight() {
  let bodySrc = './images/body' + bodyIndex + '.png'
  clownBody.src = bodySrc
  bodyIndex += 1
  if (bodyIndex > 5) {
    bodyIndex = 0
  }
}

function changeClownBodyLeft() {
  let bodySrc = './images/body' + bodyIndex + '.png'
  clownBody.src = bodySrc
  bodyIndex -= 1
  if (bodyIndex < 0) {
    bodyIndex = 5
  }
}

function changeClownShoesRight() {
  let shoesSrc = './images/shoes' + shoesIndex + '.png'
  clownShoes.src = shoesSrc
  shoesIndex += 1
  if (shoesIndex > 5) {
    shoesIndex = 0
  }
}

function changeClownShoesLeft() {
  let shoesSrc = './images/shoes' + shoesIndex + '.png'
  clownShoes.src = shoesSrc
  shoesIndex -= 1
  if (shoesIndex < 0) {
    shoesIndex = 5
  }
}

function checkKey(e) {
  if (e.keyCode == '39' && clothingIndex == 0) {
    changeClownHeadRight()
  } else if (e.keyCode == '37' && clothingIndex == 0) {
    changeClownHeadLeft()
  } else if (e.keyCode == '39' && clothingIndex == 1) {
    changeClownBodyRight()
  } else if (e.keyCode == '37' && clothingIndex == 1) {
    changeClownBodyLeft()
  } else if (e.keyCode == '39' && clothingIndex == 2) {
    changeClownShoesRight()
  } else if (e.keyCode == '37' && clothingIndex == 2) {
    changeClownShoesLeft()
  } else if (e.keyCode == '38') {
    changeClothingItemUp()
  } else if (e.keyCode == '40') {
    changeClothingItemDown()
  }
}
document.onkeydown = checkKey
