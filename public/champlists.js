const button = document.getElementById(`btn2`)

const getAllBtn = document.querySelector('#all')
const createForm = document.querySelector('#create-form')
const newChampInput = document.querySelector('#champ')

const charContainer = document.querySelector('section')

const baseURL = 'http://localhost:4000'

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  // charCard.innerHTML = `<h3>Draven </h3>`
  charCard.innerHTML = `<h3>${char.champName} </h3>`
  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}


const getAllCharacters = () => {
  clearCharacters()

  axios.get(`${baseURL}/api/champlist`)
    .then((response) => {
      for(let i = 0; i < response.data.length; i++){
        createCharacterCard(response.data[i])
      }
    })
    .catch(error => console.log(error))
}




const createNewChar = (evt) => {
  evt.preventDefault()

  clearCharacters()

  

  let body = {
    champName: `Draven`,
  }

  axios.post(`${baseURL}/api/champlist`, body)
    .then(res => {
      for(let i = 0; i < res.data.length; i++){
        createCharacterCard(res.data[i])
      }
      // getAllCharacters()
    })
    .catch(error => console.log(error))

  newChampInput.value = ''


}





// button.addEventListener(`click`, goToNewPage)
createForm.addEventListener('submit', createNewChar)


createNewChar()
clearCharacters()
getAllCharacters()





