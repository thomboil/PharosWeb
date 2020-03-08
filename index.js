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
    //Sets names from online json Elections
    document.getElementById('titreElection1').innerHTML =data.Elections[0].name;
    document.getElementById('dateElection1').innerHTML = data.Elections[0].date;

    document.getElementById('titreElection2').innerHTML =data.Elections[1].name;
    document.getElementById('dateElection2').innerHTML = data.Elections[1].date;

    document.getElementById('titreElection3').innerHTML =data.Elections[2].name;
    document.getElementById('dateElection3').innerHTML = data.Elections[2].date;

    document.getElementById('titreElection4').innerHTML =data.Elections[3].name;
    document.getElementById('dateElection4').innerHTML = data.Elections[3].date;
}
function addElementPourPartisFedderaux(data)
{
    document.getElementById('carteProvinciale').style.display = "none";


    // Ajout des specification de la boite du des parties politique federaux
    var abrFed = document.querySelectorAll("#carteFederaux .abr");
    var nomCompletFed = document.querySelectorAll("#carteFederaux .nomComplet");
    var valFed = document.querySelectorAll("#carteFederaux .value");
    for (i = 0; i < abrFed.length; i++) {
        abrFed[i].innerHTML = data.PartisFederaux[i].abreviation;     
    }
    for (i = 0; i < valFed.length; i++) {
        valFed[i].value = data.PartisFederaux[i].abreviation;     
    }
    for (i = 0; i < nomCompletFed.length; i++) {
        nomCompletFed[i].innerHTML = data.PartisFederaux[i].fullname;     
    }
     
    // Ajout des specification de la boite du des parties politique provinciale
    var abrProv = document.querySelectorAll("#carteProvinciale .abr");
    var nomCompletProv = document.querySelectorAll("#carteProvinciale .nomComplet");
    var valProv = document.querySelectorAll("#carteProvinciale .value");

    for (i = 0; i < abrProv.length; i++) {
        abrProv[i].innerHTML = data.PartisProvinciaux[i].abreviation;     
    }
    for (i = 0; i < valProv.length; i++) {
        valProv[i].value = data.PartisProvinciaux[i].abreviation;     
    }
    for (i = 0; i < nomCompletProv.length; i++) {
        nomCompletProv[i].innerHTML = data.PartisProvinciaux[i].fullname;     
    }
}

function changeStar(element){
    console.log(element);
    element.classList.toggle('far');
    element.classList.toggle('fas');
    
}

function checkBoxCount()
{
        var btnConnaitreBackground = document.querySelector("#btnConnaitre");
        var btnComparerBackground = document.querySelector('#btnComparer');
        var btnComparer = document.getElementById("btnComparerLink")
        var btnConnaitre = document.getElementById("btnConnaitreLink");
        var counter = 0,
        i = 0,      
        newUrl1 = 'proposition_connaitre.html?',
        newUrl2 = 'comparer_proposition.html?',

        input_tag = document.getElementsByTagName('input');

    for (i = 0; i < input_tag.length; i++) {

        if (input_tag[i].type === 'checkbox' && input_tag[i].checked === true) {

            counter++;
            newUrl1 = newUrl1 + '&' + input_tag[i].value;
            newUrl2 = newUrl2 + '&' + input_tag[i].value;
        }
    }
    if(counter === 1){ 
        btnConnaitre.href = newUrl1;
        btnComparer.href = "";

        btnComparer.classList.add("noDecoration");
        btnConnaitre.classList.remove("noDecoration");

        btnConnaitreBackground.classList.add("btnActionActive");
        btnComparerBackground.classList.remove("btnActionActive");

        console.log(btnConnaitre.href);
        console.log(btnComparer.href);
    }
    else if(counter === 2){
        btnComparer.href = newUrl2;
        btnConnaitre.href = "";

        btnConnaitre.classList.add("noDecoration");
        btnComparer.classList.remove("noDecoration");

        btnComparerBackground.classList.add("btnActionActive");
        btnConnaitreBackground.classList.remove("btnActionActive");

        
        console.log(btnConnaitre.href);
        console.log(btnComparer.href);

    }else{
        btnComparer.href = "";
        btnConnaitre.href = "";

        btnComparer.classList.add("noDecoration");
        btnConnaitre.classList.add("noDecoration");

        btnConnaitreBackground.classList.remove("btnActionActive");
        btnComparerBackground.classList.remove("btnActionActive");

        
        console.log(btnConnaitre.href);
        console.log(btnComparer.href);
    }

}

function changeSelection(element)
{
    input_tag = document.getElementsByTagName('input');

    for (i = 0; i < input_tag.length; i++) {

        if (input_tag[i].type === 'checkbox') {
            input_tag[i].checked = false;
        }
    }

    var btnConnaitreBackground = document.querySelector("#btnConnaitre");
    var btnComparerBackground = document.querySelector('#btnComparer');
    var btnComparer = document.getElementById("btnComparerLink")
    var btnConnaitre = document.getElementById("btnConnaitreLink");

    btnComparer.classList.add("noDecoration");
    btnConnaitre.classList.add("noDecoration");

    btnConnaitreBackground.classList.remove("btnActionActive");
    btnComparerBackground.classList.remove("btnActionActive");

    if(element.value === "fed")
    {
        document.getElementById('carteProvinciale').style.display = "none";
        document.getElementById('carteFederaux').style.display = "inline";
    }
    else if(element.value === "prov")
    {
        document.getElementById('carteProvinciale').style.display = "inline";
        document.getElementById('carteFederaux').style.display = "none";
    }
}

function updateTitre(){

    //<body onload="updateTitre()">

    var monURL = window.location.href;
    console.log(monURL);
    var i = 0;
    var tag;
    var aPartir = false;
    var l = monURL.length;
    
    for ( i ; i < l; i++){
        if(aPartir === true){
            tag = monURL.substring(i,monURL.length);
            console.log(tag);
            break;
        }
        if(monURL[i] === '&')
        {
            aPartir = true;
        }

    }

    var titre = document.getElementById("headerTitle");
    console.log(titre.innerHTML);
    titre.innerHTML = tag;

    

    

}