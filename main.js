const LinksSocialMedia = {
  github: 'sandrodecampos',
  facebook: 'sandrorcampos',
  twitter : 'sandrorcampos',
  instagram: 'sandrorcampos',
  youtube: 'UCfETuRMPFvtKi3EwbOyrvtQ' 
}

function changeSocialMediaLinks() {
  
  for(let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubUserProfile() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userNameGitHub.href = `https://github.com/${data.login}`;
      userImageGitHub.src = data.avatar_url;
      // OR  
      // const userBio = document.getElementById('userBio');
      // userBio.innerHTML = data.bio;
    })
}

getGitHubUserProfile();