fetch(`https://theblackwomanhistory.firebaseio.com/.json`)
.then((response) =>{
    return response.json();
})
.then((data) =>{
    data.content.forEach(perfil => {
        const box = document.querySelector(".maravilhosas__box");

        const card = document.createElement('div');
        card.setAttribute('class', 'maravilhosas__perfil');

        const profile = document.createElement('a');
        profile.setAttribute('href', '#')

        const img = document.createElement('img');
        img.setAttribute('class', 'img-responsive');

        if (perfil.metadata){
            if (perfil.metadata.image){
                if (perfil.metadata.image.url){
                    img.setAttribute('src', perfil.metadata.image.url);
                }
            } else {
                img.setAttribute('src', './img/img-mulher.png');
            }
        } else {
            img.setAttribute('src', './img/img-mulher.png');
        }

        const name = document.createElement('p');
        name.textContent = perfil.title;

        box.appendChild(card);
        card.appendChild(profile);
        profile.appendChild(img);
        profile.appendChild(name);
    })
})
.catch(function(erro){
    console.log(erro);
})