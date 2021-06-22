function nameAndAge(){
  let nameSurname = document.getElementById('nameSurname')
  let age = document.getElementById('age')
  let linkedinUrl = document.getElementById('linkedinUrl')
  let githubUrl = document.getElementById('githubUrl')
  let button = document.getElementById('button')
  nameSurname.innerHTML= 'abdurrahman masdi'
  age.innerHTML= '19'
  linkedinUrl.setAttribute('href', 'https://www.linkedin.com/in/abdulrahman-masdi/')
  githubUrl.setAttribute('href', 'https://github.com/abedlrhman')
  button.style.display = 'none'
}