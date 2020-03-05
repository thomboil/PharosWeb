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
    document.getElementById("arrow").innerHTML = data.Election[0]
}