fetch(`https://theblackwomanhistory.firebaseio.com/.json`)
.then((response) =>{
    return response.json();
})
.then((data) =>{
    data.content.forEach(perfil => {
        const box = document.querySelector(".maravilhosas__box");

        const div = document.createElement('div');
        div.setAttribute('class', 'maravilhosas__perfil');

        const clic = document.createElement('a');


        box.appendChild(div);
        div.appendChild(clic);
        clic.appendChild(a);
    })
})