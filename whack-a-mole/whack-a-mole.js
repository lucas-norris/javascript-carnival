// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//Access data in all cells
const dataCells = document.getElementsByTagName('td')

//get mole image
const moleImage = document.createElement('img')
moleImage.src = './mole.PNG'
moleImage.id = 'mole'

function randomMole() {
  const randomElement = dataCells[Math.floor(Math.random() * dataCells.length)]
  randomElement.appendChild(moleImage)
}

function randomMoleClick(e) {
  const cell = e.target
  let sound = new Audio()
  sound.src = 'whack-audio.wav'
  if (cell.id == 'mole') {
    cell.parentNode.removeChild(moleImage)
    randomMole()
    sound.play()
  }
}

//loop to check when cells clicked
for (let i = 0; i < dataCells.length; i++) {
  dataCells[i].onclick = randomMoleClick
}

randomMole()
