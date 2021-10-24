const links = {
  github: "lMatheuslOliveira",
  youtube: "UCSuf3BBh7rlCv8o4r9Phy7A",
  facebook: "lmatheusloliveiral",
  instagram: "matheuzob",
  twitter: "Matheuz0liveira",
}


function changeSocialMedia(){
  for (let li of socialLinks.children){
   const social = li.getAttribute('class')
   
   li.children[0].href = `https://${social}.com/${links[social]}`
   
   alert(li.children[0].href)

  }
}

changeSocialMedia()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`
}