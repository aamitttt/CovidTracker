const activecase = document.getElementsByClassName("active").value;



document.addEventListener('DOMContentLoaded', ()=>{


const selectDrop = document.getElementById('countries');

fetch('https://restcountries.eu/rest/v2/all').then(res=>{

return res.json();
})

.then(data =>{
    var output=' ';

    data.forEach(country =>{
        output+= `<option value="${country.name}">${country.name}</option>`;

        selectDrop.innerHTML = output;
    
    })
})

});

function get()
{
    var getc = document.getElementById("countries").value;
    document.getElementById("cname").innerHTML = getc;
}



function get()
{
    var getc = document.getElementById("countries").value;
    document.getElementById("cname").innerHTML = getc;

const prom = fetch('https://api.covid19api.com/summary');

prom.then((res)=>{
    return res.json();
}).then((data)=>{
var i=0;
    while(1)
    {
   
        if(data.Countries[i].Country==getc)
        {
            
            var code = data.Countries[i].CountryCode;
            var NewConfirmed = data.Countries[i].NewConfirmed;
            var NewDeaths = data.Countries[i].NewDeaths;
            var TotalConfirmed = data.Countries[i].TotalConfirmed;
            var TotalDeaths = data.Countries[i].TotalDeaths;


            document.getElementById("confirm").innerText=TotalConfirmed;
            document.getElementById("code").innerText=code;
            document.getElementById("death").innerText=TotalDeaths;
            document.getElementById("newconfirm").innerText=NewConfirmed;
            document.getElementById("newdeath").innerText=NewDeaths;
            
            
            break;
        }
        i++;


    }
})
}


