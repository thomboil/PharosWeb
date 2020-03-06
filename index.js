fetch('https://log2420-serve.herokuapp.com/JSON/output.json')

    .then(function (response)
    {
        return response.json();
    })
    .then(function (data)
    {
        console.log(data)
        addElementPourElection(data);
        addElementPourPartisFedderaux(data);
    })
    .catch(function(error){
            console.log("error: " + error)
    });

function addElementPourElection(data)
{
    //console.log(data.Elections[0].name);
    document.getElementById('titreElection1').innerHTML =data.Elections[0].name;
}

//BTN CLICKS ELECTIONS
function clickImgElection1(){
   var url = "http://127.0.0.1:5501/img/btn_cercleVide.svg"; 
   var off = "img/btn_cercleVide.svg";
   var on = "img/cercle_selected.svg";
   
   
   var btn1 = document.getElementById('btnElection1');
   var btn2 = document.getElementById('btnElection2');
   var btn3 = document.getElementById('btnElection3');
   var btn4 = document.getElementById('btnElection4');
   
   btn1.src = on;
   btn2.src = off;
   btn3.src = off;
   btn4.src = off;
     
//    Tests
//    console.log(imgElement.src === img1);
//    console.log(imgElement.src);
}

function clickImgElection2(){
    var url = "http://127.0.0.1:5501/img/btn_cercleVide.svg"; 
    var off = "img/btn_cercleVide.svg";
    var on = "img/cercle_selected.svg";
    
    var btn1 = document.getElementById('btnElection1');
    var btn2 = document.getElementById('btnElection2');
    var btn3 = document.getElementById('btnElection3');
    var btn4 = document.getElementById('btnElection4');
    
    btn1.src = off;
    btn2.src = on;
    btn3.src = off;
    btn4.src = off;
      
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgElection3(){
    var url = "http://127.0.0.1:5501/img/btn_cercleVide.svg"; 
    var off = "img/btn_cercleVide.svg";
    var on = "img/cercle_selected.svg";
    
    var btn1 = document.getElementById('btnElection1');
    var btn2 = document.getElementById('btnElection2');
    var btn3 = document.getElementById('btnElection3');
    var btn4 = document.getElementById('btnElection4');
    
    btn1.src = off;
    btn2.src = off;
    btn3.src = on;
    btn4.src = off;
      
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgElection4(){
    var url = "http://127.0.0.1:5501/img/btn_cercleVide.svg"; 
    var off = "img/btn_cercleVide.svg";
    var on = "img/cercle_selected.svg";
    
    var btn1 = document.getElementById('btnElection1');
    var btn2 = document.getElementById('btnElection2');
    var btn3 = document.getElementById('btnElection3');
    var btn4 = document.getElementById('btnElection4');
    
    btn1.src = off;
    btn2.src = off;
    btn3.src = off;
    btn4.src = on;
      
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

//BTN CLICKS PARTIS
function clickImgPartis1(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn1 = document.getElementById('btnParti1');
    btn1.src = (btn1.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);

 
 
}

function clickImgPartis2(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn2 = document.getElementById('btnParti2');
    btn2.src = (btn2.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgPartis3(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn3 = document.getElementById('btnParti3');
    btn3.src = (btn3.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgPartis4(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn4 = document.getElementById('btnParti4');
    btn4.src = (btn4.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgPartis5(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn5 = document.getElementById('btnParti5');
    btn5.src = (btn5.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgPartis6(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn6 = document.getElementById('btnParti6');
    btn6.src = (btn6.src === url)? on : off;

    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

function clickImgPartis7(){
    var url = "http://127.0.0.1:5501/img/btn_carreVide.svg"; 
    var off = "img/btn_carreVide.svg";
    var on = "img/btn_carreSelect.svg";
    
    var btn7 = document.getElementById('btnParti7');
    btn7.src = (btn7.src === url)? on : off;
    
    actionBtnActivate()
 //    Tests
 //    console.log(imgElement.src === img1);
 //    console.log(imgElement.src);
 
}

//doit avoir le meme name
//get elements dans un tableau, compteur, si 2, active lautre shit sinon non

function actionBtnActivate(){

    
    var active = "http://127.0.0.1:5501/img/btn_carreSelect.svg"; 
    var cpt = 0;
    var btnCarreTable = document.querySelectorAll(".btn-carre");
    for(var i = 0; i< btnCarreTable.length ; i++ ){
        if(btnCarreTable[i].src === active)
        cpt++;
    }

    var btnConnaitre = document.querySelector("#btnConnaitre");
    var btnComparer = document.querySelector('#btnComparer');

    if(cpt === 1){
        btnConnaitre.classList.add("btnActionActive");
        btnConnaitre.innerHTML.
        btnComparer.classList.remove("btnActionActive");
        // console.log("premier btn on");

    }else if( cpt === 2){
        btnConnaitre.classList.remove("btnActionActive");
        btnComparer.classList.add("btnActionActive");
        // console.log("deuieme btn on");
        // console.log("premier btn off");
    }else{
        btnConnaitre.classList.remove("btnActionActive");
        btnComparer.classList.remove("btnActionActive");
        // console.log("deuieme btn off");
        // console.log("premier btn off");
    }

    //console.log(cpt);
}