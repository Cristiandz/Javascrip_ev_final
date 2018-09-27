var nuevo="";
var anterior=0;
var operador="";
var resultado=0;
var indicador=false;
var pantalla=document.getElementById("display");
var teclas=document.getElementsByClassName("tecla");

for(i=0;i<teclas.length;i++){
  teclas[i].addEventListener("mousedown",function(event){
    event.target.setAttribute("style", "transform:scale(0.90,0.90)");
  })

  teclas[i].addEventListener("mouseup",function(event){
    event.target.setAttribute("style", "transform:scale(1,1)");
  })
}


for(i=0;i<teclas.length;i++){
  teclas[i].addEventListener("click",function(event){
      id=event.target.getAttribute('id');
      switch(id){
          case "on":
              pantalla.innerHTML="0";
              anterior=0;
              nuevo="";
              indicador=false;
              break;
          case "mas":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operador="mas";
              break;
          case "menos":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operador="menos";
              break;
          case "por":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operador="por";
              break;
          case "dividido":
              if(resultado!==0){
                  anterior=parseFloat(resultado);
              }
              else{
                  anterior=parseFloat(nuevo);
              }
              nuevo="";
              pantalla.innerHTML=nuevo;
              operador="dividido";
              break;
          case "igual":
              if(indicador===true){
                  if(operador==="mas"){
                resultado=parseFloat(nuevo)+parseFloat(anterior);
                }
                if(operador==="menos"){
                    resultado=parseFloat(nuevo)-parseFloat(anterior);
                }
                if(operador==="por"){
                    resultado=parseFloat(nuevo)*parseFloat(anterior);
                }
                if(operador==="dividido"){
                    resultado=parseFloat(nuevo)/parseFloat(anterior);
                }
                nuevo=resultado;
              }
              else{
                anterior=nuevo;
                nuevo=resultado;
                indicador=true;
                }
                resultado=resultado.toString();
                if(resultado.length>7){
                    resultado=parseFloat(resultado);
                    resultado=resultado.toExponential(2);
                    pantalla.innerHTML=resultado;
                }
                else{
                    pantalla.innerHTML=resultado;
                }
              break;
          case "sign":
              if(pantalla.innerHTML!=="0"||pantalla.innerHTML!==""){
                  if(nuevo!==""){
                  nuevo=parseFloat(nuevo);
                  nuevo=-nuevo;
                  pantalla.innerHTML=nuevo;
                  }
              }
              break;
          case "punto":
              id=".";
              for(i=0;i<nuevo.length;i++){
                  if(nuevo[i]==="."){
                      id="";
                  }
              }
              if(pantalla.innerHTML!=="0"){
              nuevo=nuevo+id;
              pantalla.innerHTML=nuevo;};
              break;
        default:
            indicador=false;
            nuevo=nuevo.toString();
            if(nuevo.length<=7){
                if(pantalla.innerHTML==="0" && id==="0"){}
                else{
                nuevo=nuevo+id;
                pantalla.innerHTML=nuevo;}
            }
            ///////////////////////////////
            if(operador==="mas"){
                resultado=anterior+parseFloat(nuevo);
              }
              if(operador==="menos"){
                  resultado=anterior-parseFloat(nuevo);
              }
              if(operador==="por"){
                  resultado=anterior*parseFloat(nuevo);
              }
              if(operador==="dividido"){
                  resultado=anterior/parseFloat(nuevo);
              }
            break;
      }
  });
};

/*

var Calculadora = {}

Calculadora = ( function(){
  teclas = document.getElementsByClassName("tecla")

  teclas[0].onmousedown= function(){
  teclas[0].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[0].onmouseup = function(){
  teclas[0].style.transform = "scale(1,1)";};

  teclas[1].onmousedown= function(){
  teclas[1].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[1].onmouseup = function(){
  teclas[1].style.transform = "scale(1,1)";};

  teclas[2].onmousedown= function(){
  teclas[2].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[2].onmouseup = function(){
  teclas[2].style.transform = "scale(1,1)";};

  teclas[3].onmousedown= function(){
  teclas[3].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[3].onmouseup = function(){
  teclas[3].style.transform = "scale(1,1)";};

  teclas[4].onmousedown= function(){
  teclas[4].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[4].onmouseup = function(){
  teclas[4].style.transform = "scale(1,1)";};

  teclas[5].onmousedown= function(){
  teclas[5].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[5].onmouseup = function(){
  teclas[5].style.transform = "scale(1,1)";};

  teclas[6].onmousedown= function(){
  teclas[6].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[6].onmouseup = function(){
  teclas[6].style.transform = "scale(1,1)";};

  teclas[7].onmousedown= function(){
  teclas[7].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[7].onmouseup = function(){
  teclas[7].style.transform = "scale(1,1)";};

  teclas[8].onmousedown= function(){
  teclas[8].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[8].onmouseup = function(){
  teclas[8].style.transform = "scale(1,1)";};

  teclas[9].onmousedown= function(){
  teclas[9].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[9].onmouseup = function(){
  teclas[9].style.transform = "scale(1,1)";};

  teclas[10].onmousedown= function(){
  teclas[10].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[10].onmouseup = function(){
  teclas[10].style.transform = "scale(1,1)";};

  teclas[11].onmousedown= function(){
  teclas[11].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[11].onmouseup = function(){
  teclas[11].style.transform = "scale(1,1)";};

  teclas[12].onmousedown= function(){
  teclas[12].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[12].onmouseup = function(){
  teclas[12].style.transform = "scale(1,1)";};

  teclas[13].onmousedown= function(){
  teclas[13].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[13].onmouseup = function(){
  teclas[13].style.transform = "scale(1,1)";};

  teclas[14].onmousedown= function(){
  teclas[14].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[14].onmouseup = function(){
  teclas[14].style.transform = "scale(1,1)";};

  teclas[15].onmousedown= function(){
  teclas[15].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[15].onmouseup = function(){
  teclas[15].style.transform = "scale(1,1)";};

  teclas[16].onmousedown= function(){
  teclas[16].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[16].onmouseup = function(){
  teclas[16].style.transform = "scale(1,1)";};

  teclas[17].onmousedown= function(){
  teclas[17].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[17].onmouseup = function(){
  teclas[17].style.transform = "scale(1,1)";};

  teclas[18].onmousedown= function(){
  teclas[18].setAttribute("style", "transform:scale(0.95,0.95)");};

  teclas[18].onmouseup = function(){
  teclas[18].style.transform = "scale(1,1)";};



var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tresultado = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var mas = document.getElementById('mas');
var menos = document.getElementById('menos');
var por = document.getElementById('por');
var dividivo = document.getElementById('dividido');



screen= document.getElementById('display');

uno.onclick=function(){screen.innerHTML="1";};
dos.onclick=function(){screen.innerHTML="2";};
tresultado.onclick=function(){screen.innerHTML="3";};
cuatro.onclick=function(){screen.innerHTML="4";};
cinco.onclick=function(){screen.innerHTML="5";};
seis.onclick=function(){screen.innerHTML="6";};
siete.onclick=function(){screen.innerHTML="7";};
ocho.onclick=function(){screen.innerHTML="8";};
nueve.onclick=function(){screen.innerHTML="9";};
cinco.onclick=function(){screen.innerHTML="10";};


function insetar(uno){
  screen[0].value = screen[0].value + uno
};




}())
*/
