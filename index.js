const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];


const btnGenerateEl = document.getElementById('btn-generate');
const inputsEl = document.querySelectorAll('#input-group input');

function genratePassword() {
  let pass = '';
  for (let i = 0; i < 15; i++) {
    pass += characters[Math.floor(Math.random() * characters.length)];
  }
  return pass;
}

btnGenerateEl.addEventListener('click', (event) => {
  event.preventDefault();
  
  const pass1 = genratePassword()
  const pass2 = genratePassword()
  
  // console.log(pass1, pass2)
  // console.log(inputsEl)
  
  inputsEl[0].value = pass1
  inputsEl[1].value = pass2





})



