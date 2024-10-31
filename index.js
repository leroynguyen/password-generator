const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "],",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
]

let pwd1El = document.getElementById("pwd-1")
let pwd2El = document.getElementById("pwd-2")

function generatePassword() {
  console.log("Password generating...")

  pwd1El.textContent = "" // clear previous password
  pwd2El.textContent = "" // clear previous password

  // Generate password fpr pwd1El
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    pwd1El.textContent += characters[randomIndex]
  }

  // Generate password fpr pwd2El
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    pwd2El.textContent += characters[randomIndex]
  }
}

function copyPasswordOneToClipboard() {
  if (pwd1El.textContent !== "") {
    const originalText = pwd1El.textContent
    navigator.clipboard.writeText(originalText)
    pwd1El.textContent = "Copied!"

    // Set a delay to revert back to original Text
    setTimeout(() => {
      pwd1El.textContent = originalText
    }, 2000)
  }
}

function copyPasswordTwoToClipboard() {
  if (pwd2El.textContent !== "") {
    const originalText = pwd2El.textContent
    navigator.clipboard.writeText(originalText)
    pwd2El.textContent = "Copied!"

    // Set a delay to revert back to originalText
    setTimeout(() => {
      pwd2El.textContent = originalText
    }, 2000)
  }
}
