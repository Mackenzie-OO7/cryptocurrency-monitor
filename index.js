let ws = new WebSocket('wss://stream.binance.com/stream?streams=ethusdt@trade/btcusdt@trade/xrpusdt@trade/ltcusdt@trade/maticusdt@trade/bnbusdt@trade/solusdt@trade/adausdt@trade/dotusdt@trade/dogeusdt@trade/trxusdt@trade/avaxusdt@trade');

let ethUsdt = document.getElementById('eth');
let lastPrice = null;
let btcUsdt = document.getElementById('btc');
let btclastPrice = null;
let xrpUsdt = document.getElementById('xrp');
let xrplastPrice = null;
let ltcUsdt = document.getElementById('ltc');
let ltclastPrice = null;
let maticUsdt = document.getElementById('matic'); // Add this line
let maticLastPrice = null; // Add this line
let bnbUsdt = document.getElementById('bnb'); // Add this line
let bnbLastPrice = null; // Add this line
let solUsdt = document.getElementById('sol');
let solLastPrice = null;
let adaUsdt = document.getElementById('ada');
let adaLastPrice = null;
let dotUsdt = document.getElementById('dot');
let dotLastPrice = null;
let dogeUsdt = document.getElementById('doge');
let dogeLastPrice = null;
let trxUsdt = document.getElementById('trx');
let trxLastPrice = null;
let avaxUsdt = document.getElementById('avax');
let avaxLastPrice = null;
let price = null;
let btcprice = null;
let xrpprice = null;
let ltcprice = null;
let maticprice = null; // Add this line
let bnbprice = null; // Add this line
let solPrice = null;
let adaPrice = null;
let dotPrice = null;
let dogePrice = null;
let trxPrice = null;
let avaxPrice = null;
let collection = document.getElementsByClassName("bi");

ws.onmessage = (event) => {
    let eventData = JSON.parse(event.data);
    if (eventData.stream == 'ethusdt@trade') {
        price = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'btcusdt@trade') {
        btcprice = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'xrpusdt@trade') {
        xrpprice = parseFloat(eventData.data.p).toFixed(3);
    }
    else if (eventData.stream == 'ltcusdt@trade') {
        ltcprice = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'maticusdt@trade') {
        maticprice = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'bnbusdt@trade') {
        bnbprice = parseFloat(eventData.data.p).toFixed(2);
    }
     else if (eventData.stream == 'solusdt@trade') {
        solprice = parseFloat(eventData.data.p).toFixed(2);
    } 
    else if (eventData.stream == 'adausdt@trade') {
        adaprice = parseFloat(eventData.data.p).toFixed(2);
    } 
     else if (eventData.stream == 'dotusdt@trade') {
        dotprice = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'dogeusdt@trade') {
        dogeprice = parseFloat(eventData.data.p).toFixed(2);
    }
    else if (eventData.stream == 'trxusdt@trade') {
        trxprice = parseFloat(eventData.data.p).toFixed(2);
    } 
    else if (eventData.stream == 'avaxusdt@trade') {
        avaxprice = parseFloat(eventData.data.p).toFixed(2);
    }

    ethUsdt.innerText = price;
    btcUsdt.innerText = btcprice;
    xrpUsdt.innerText = xrpprice;
    ltcUsdt.innerText = ltcprice;
    maticUsdt.innerText = maticprice; // Add this line
    bnbUsdt.innerText = bnbprice; // Add this line
    solUsdt.innerText = solprice;
    adaUsdt.innerText = adaprice;
    dotUsdt.innerText = dotprice;
    dogeUsdt.innerText = dogeprice;
    trxUsdt.innerText = trxprice;
    avaxUsdt.innerText = avaxprice;

    // Conditions to add the caret icons for Ethereum
    if (price > lastPrice) {
        collection[0].classList.remove("bi-caret-down-fill");
        collection[0].classList.add("bi-caret-up-fill");
        collection[0].style.color = 'green';
    }
    else if (price < lastPrice) {
        collection[0].classList.remove("bi-caret-up-fill");
        collection[0].classList.add("bi-caret-down-fill");
        collection[0].style.color = 'red';
    }

    lastPrice = price;

    // Conditions to add the caret icons for Bitcoin
    if (btcprice > btclastPrice) {
        collection[1].classList.remove("bi-caret-down-fill");
        collection[1].classList.add("bi-caret-up-fill");
        collection[1].style.color = 'green';
    }
    else if (btcprice < btclastPrice) {
        collection[1].classList.remove("bi-caret-up-fill");
        collection[1].classList.add("bi-caret-down-fill");
        collection[1].style.color = 'red';
    }

    btclastPrice = btcprice;

    // Conditions to add the caret icons for Ripple
    if (xrpprice > xrplastPrice) {
        collection[2].classList.remove("bi-caret-down-fill");
        collection[2].classList.add("bi-caret-up-fill");
        collection[2].style.color = 'green';
    }
    else if (xrpprice < xrplastPrice) {
        collection[2].classList.remove("bi-caret-up-fill");
        collection[2].classList.add("bi-caret-down-fill");
        collection[2].style.color = 'red';
    }

    xrplastPrice = xrpprice;

    // Conditions to add the caret icons for Litecoin
    if (ltcprice > ltclastPrice) {
        collection[3].classList.remove("bi-caret-down-fill");
        collection[3].classList.add("bi-caret-up-fill");
        collection[3].style.color = 'green';
    }
    else if (ltcprice < ltclastPrice) {
        collection[3].classList.remove("bi-caret-up-fill");
        collection[3].classList.add("bi-caret-down-fill");
        collection[3].style.color = 'red';
    }

    ltclastPrice = ltcprice;

    // Conditions to add the caret icons for MATIC
    if (maticprice > maticLastPrice) {
        collection[4].classList.remove("bi-caret-down-fill");
        collection[4].classList.add("bi-caret-up-fill");
        collection[4].style.color = 'green';
    }
    else if (maticprice < maticLastPrice) {
        collection[4].classList.remove("bi-caret-up-fill");
        collection[4].classList.add("bi-caret-down-fill");
        collection[4].style.color = 'red';
    }

    maticLastPrice = maticprice;

    // Conditions to add the caret icons for BNB
    if (bnbprice > bnbLastPrice) {
        collection[5].classList.remove("bi-caret-down-fill");
        collection[5].classList.add("bi-caret-up-fill");
        collection[5].style.color = 'green';
    }
    else if (bnbprice < bnbLastPrice) {
        collection[5].classList.remove("bi-caret-up-fill");
        collection[5].classList.add("bi-caret-down-fill");
        collection[5].style.color = 'red';
    }

    bnbLastPrice = bnbprice;
  
    if (solprice > solLastPrice) {
        collection[6].classList.remove("bi-caret-down-fill");
        collection[6].classList.add("bi-caret-up-fill");
        collection[6].style.color = 'green';
    }
    else if (solprice < solLastPrice) {
        collection[6].classList.remove("bi-caret-up-fill");
        collection[6].classList.add("bi-caret-down-fill");
        collection[6].style.color = 'red';
    }

    solLastPrice = solprice;
  
    if (adaprice > adaLastPrice) {
        collection[7].classList.remove("bi-caret-down-fill");
        collection[7].classList.add("bi-caret-up-fill");
        collection[7].style.color = 'green';
    }
    else if (adaprice < adaLastPrice) {
        collection[7].classList.remove("bi-caret-up-fill");
        collection[7].classList.add("bi-caret-down-fill");
        collection[7].style.color = 'red';
    }

    adaLastPrice = adaprice;

    if (dotprice > dotLastPrice) {
        collection[8].classList.remove("bi-caret-down-fill");
        collection[8].classList.add("bi-caret-up-fill");
        collection[8].style.color = 'green';
    }
    else if (dotprice < dotLastPrice) {
        collection[8].classList.remove("bi-caret-up-fill");
        collection[8].classList.add("bi-caret-down-fill");
        collection[8].style.color = 'red';
    }

    dotLastPrice = dotprice;

    if (trxprice > trxLastPrice) {
        collection[9].classList.remove("bi-caret-down-fill");
        collection[9].classList.add("bi-caret-up-fill");
        collection[9].style.color = 'green';
    }
    else if (trxprice < trxLastPrice) {
        collection[9].classList.remove("bi-caret-up-fill");
        collection[9].classList.add("bi-caret-down-fill");
        collection[9].style.color = 'red';
    }

    trxLastPrice = trxprice;

    if (dogeprice > dogeLastPrice) {
        collection[10].classList.remove("bi-caret-down-fill");
        collection[10].classList.add("bi-caret-up-fill");
        collection[10].style.color = 'green';
    }
    else if (dogeprice < dogeLastPrice) {
        collection[10].classList.remove("bi-caret-up-fill");
        collection[10].classList.add("bi-caret-down-fill");
        collection[10].style.color = 'red';
    }

    dogeLastPrice = dogeprice;

    if (avaxprice > avaxLastPrice) {
        collection[11].classList.remove("bi-caret-down-fill");
        collection[11].classList.add("bi-caret-up-fill");
        collection[11].style.color = 'green';
    }
    else if (avaxprice < avaxLastPrice) {
        collection[11].classList.remove("bi-caret-up-fill");
        collection[11].classList.add("bi-caret-down-fill");
        collection[11].style.color = 'red';
    }

    avaxLastPrice = avaxprice;
}
