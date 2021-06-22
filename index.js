function nameAndAge(){
  let nameSurname = document.getElementById('nameSurname')
  let age = document.getElementById('age')
  let linkedinUrl = document.getElementById('linkedinUrl')
  let githubUrl = document.getElementById('githubUrl')
  let button = document.getElementById('button')
  let myName = 'abdurrahman'
  let lastName = 'masdi'
  nameSurname.innerHTML= `${myName} ${lastName}`
  age.innerHTML= '19'
  linkedinUrl.setAttribute('href', 'https://www.linkedin.com/in/abdulrahman-masdi/')
  githubUrl.setAttribute('href', 'https://github.com/abedlrhman')
  button.style.display = 'none'
}
