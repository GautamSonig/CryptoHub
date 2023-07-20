var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethererum")
var doge = document.getElementById("dogecoin")


var setting={
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method": "GET",
    "headers":{}
}
$.ajax(setting).done(function(response){
    btc.innerHTML=response.bitcoin.inr;
    eth.innerHTML=response.ethererum.inr;
    doge.innerHTML=response.dogecoin.inr;
});