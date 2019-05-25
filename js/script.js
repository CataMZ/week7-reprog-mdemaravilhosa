fetch(`http://localhost:5001/maravilhosas`)
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
        
        // Segundo jeito do if:
        
        // if (perfil.metadata && perfil.metadata.image){
        //     img.setAttribute('src', perfil.metadata.image.url);
        // } else{
        //     img.setAttribute('src', './img/img-mulher.png');
        // }
        
        const name = document.createElement('p');
        name.textContent = perfil.title;
        
        box.appendChild(card);
        card.appendChild(profile);
        profile.appendChild(img);
        profile.appendChild(name);

const botao = document.createElement("button");
botao.textContent = "✖";
botao.setAttribute("data-id", perfil.id)
card.appendChild(botao)

botao.addEventListener("click", () => {
    const thisCard = botao.parentElement; // Pesquisar o que é            
    const cardPai = thisCard.parentElement;            
    
    fetch(`http://localhost:5001/maravilhosas/${perfil.id}`, {
    method: 'DELETE',
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
})
.then(() =>{
    cardPai.removeChild(thisCard) // Pesquisar o que é
})
.catch((erro) =>{
    console.log(erro)
})
})
})
})
.catch(function(erro){
    console.log(erro);
})

// Criar novo fetch para fazer POST
const button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    const nome = document.getElementById("name").value;
    const imagem = document.getElementById("image").value;
    
    fetch('http://localhost:5001/maravilhosas', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'title': nome,
        'metadata': {'image':{'url':imagem}},
    })
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log("Sucesso!! :)");
})
.catch((erro) => {
    console.log(erro)
})
})
