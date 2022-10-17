//function hello (){
    //var casa1 = document.getElementById('casa1');
    //casa1.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg')";    
//}
// Imagem X = https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png
// Imagam O = https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png

var casa1 = document.getElementById('casa1');
var casa2 = document.getElementById('casa2');
var casa3 = document.getElementById('casa3');
var casa4 = document.getElementById('casa4');
var casa5 = document.getElementById('casa5');
var casa6 = document.getElementById('casa6');
var casa7 = document.getElementById('casa7');
var casa8 = document.getElementById('casa8');
var casa9 = document.getElementById('casa9');
var casa =  document.getElementsByClassName('casa');

var jogador = 1;

function hello (n){
    var symbol = n.style.backgroundImage;
    
    if(jogador == 1 && symbol == ''){
        n.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png')";
        jogador++; 
    }
    else if(jogador == 2 && symbol == ''){
        n.style.backgroundImage = "url('https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png')";
        jogador--;
    }
    else {
        console.log('deu erro');
    }

    let turno = document.getElementById('vez-jogador').innerHTML = "Movimento do jogador " + jogador;
}
