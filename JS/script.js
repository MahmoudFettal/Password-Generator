const options = {
  numbers: true,
  uppercases: true,
  lowercases: true,
  symbols: true,
  similars: false,
  lenght: true
}

const numbers = '1234567890'
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCases = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!?#$%&*+-='

// Similar characters are : 1lI! 0OQ 8B
const numbersNoSimilar = '2345679'
const upperCasesNoSimilar = 'ACDEFGHJKLMNPRSTUVWXYZ'
const lowerCasesNoSimilar = 'abcdefghijkmnopqrstuvwxyz'
const symbolsNoSimilar = '?#$%&*+-='

const NUMBER_OF_PASSWORDS_TO_GENERATE = 1
//const DEFAULT_PASSWORD_LENGHT = 12
var PASSWORD_LENGTH = document.getElementById('password-length').value

let charPool = numbers + upperCases + lowerCases + symbols

document.getElementById('numbers').addEventListener('change', function () {
  options.numbers = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('uppercases').addEventListener('change', function () {
  options.uppercases = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('lowercases').addEventListener('change', function () {
  options.lowercases = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('symbols').addEventListener('change', function () {
  options.symbols = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('similars').addEventListener('change', function () {
  options.similars = this.checked
  updateCharPool()
  updateSubmitButton()
})
document.getElementById('password-length').addEventListener('change', function () {
  PASSWORD_LENGTH = Number(parseInt(this.value));
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('submit-btn').addEventListener('click', generatesRandomPasswords)

function generatesRandomPasswords() {
  const randomPasswords = []
    randomPasswords
      .push(Array(Number(PASSWORD_LENGTH))
        .fill(charPool)
        .map(x => x[Math.floor(Math.random() * x.length)])
        .join('')
      )
  showResults(randomPasswords)
}

function updateCharPool() {
  charPool = ''
  if (options.similars) { // if true, we don't include similar characters
    if (options.numbers) { charPool += numbersNoSimilar }
    if (options.uppercases) { charPool += upperCasesNoSimilar }
    if (options.lowercases) { charPool += lowerCasesNoSimilar }
    if (options.symbols) { charPool += symbolsNoSimilar }
  } else {
    if (options.numbers) { charPool += numbers }
    if (options.uppercases) { charPool += upperCases }
    if (options.lowercases) { charPool += lowerCases }
    if (options.symbols) { charPool += symbols }
  }
}
function verifyNumberofchars(){
  PASSWORD_LENGTH = document.getElementById('password-length').value
}
// Desactivate the generate button if the charPool is empty
function updateSubmitButton() {
  if (
    !options.numbers
    && !options.uppercases
    && !options.lowercases
    && !options.symbols
  ) {
    document.getElementById('submit-btn').classList.add('inactive')
  } else {
    document.getElementById('submit-btn').classList.remove('inactive')
    verifyNumberofchars();
  }
}

function showResults(randomPasswords) {
  document.getElementById('password-1').value = randomPasswords
  document.getElementById("submit-btn").style.display="none"; 
	document.getElementById("copy").style.display="block"; 
}

function copyPassword(password) {
  document.getElementById("submit-btn").style.display="block"; 
	document.getElementById("copy").style.display="none";
  document.getElementById(password).select()
  document.execCommand('Copy') 
}
