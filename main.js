const links = {
  github: "lMatheuslOliveiral",
  youtube: "UCSuf3BBh7rlCv8o4r9Phy7A",
  facebook: "lmatheusloliveiral",
  instagram: "matheuzob",
  twitter: "Matheuz0liveira",
}


function changeSocialMedia(){
  for (let li of socialLinks.children){
   const social = li.getAttribute('class')
   
   li.children[0].href = `https://${social}.com/${links[social]}`

  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGit.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfileInfos()
