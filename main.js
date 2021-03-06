//Ao clicar no botão, gerar 5 cores
//Colocar uma cor em cada Quadrado 

//http://thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html

const btnColor = document.getElementById('btnColor');
const corContainer = document.querySelectorAll('.color__container');
const nomeCorContainer = document.querySelectorAll('.color__name');
const formData = document.querySelectorAll('form input');
let mode = 'monochrome';

formData.forEach(el => {
    el.addEventListener('click',function(){
        mode = this.id;
    })
})

function fetchColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    fetch(`https://www.thecolorapi.com/scheme?hex=${randomColor}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(json =>{
        assignColor(json.colors);
    })
}

function assignColor(obj){
    obj.forEach((el, ind)=>{
        corContainer[ind].style.background = el.hex.value;
        nomeCorContainer[ind].innerHTML = el.hex.value;
    });

}

btnColor.addEventListener('click', function(){
    fetchColor();
})
