let numero1 = Math.floor(Math.random()* 6) + 1;
let numero2 = Math.floor(Math.random()* 6) + 1;

let imagem1Aleatoria = "./images/dice"+numero1+".png";
let imagem2Aleatoria = "./images/dice"+numero2+".png";

imagem1nova = document.querySelector("#imgDado1");
imagem1nova.setAttribute('src', imagem1Aleatoria)

imagem2nova = document.querySelector("#imgDado2");
imagem2nova.setAttribute('src', imagem2Aleatoria)

if(numero1 > numero2){
    document.querySelector("h1").innerHTML = "🚩 Jogador 1 ganha!";
}
else if (numero1 < numero2){
    document.querySelector("h1").innerHTML = "Jogador 2 ganha! 🚩";
}else{

}