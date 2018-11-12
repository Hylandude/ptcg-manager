const Models  = require('../models/index');
const fs = require('fs');
const request = require('request');

let Import = function(){
    this.loadCSV = loadCSV;
}

let loadCSV = function(filePath=__dirname.slice(0,__dirname.lastIndexOf("/"))+'/FoilInventory.csv'){
    var strData = fs.readFileSync(filePath).toString();
    var allCards = strData.split("\r\n");
    allCards.shift();
    allCards.pop();
    allCards.forEach(function(lineCard){
        lineCard = lineCard.split(",");
        var cardName = lineCard[1];
        if(cardName.indexOf(" EX") || cardName.indexOf(" GX")){
            cardName = cardName.replace(" EX", "-EX");
            cardName = cardName.replace(" GX", "-GX");
        }
        var cardNumber = lineCard[3].indexOf("/") > 0 ? lineCard[3].slice(0,lineCard[3].indexOf("/")) : lineCard[3];
        var queryString = "?name="+cardName+"&number="+cardNumber;
        request.get(process.env.cards_URL+queryString, function(err, respone, body){
            console.log((process.env.cards_URL+queryString)+"\n"+body+"\n\n");
            if (body && body.cards && body.cards[0]){
                Models.Card.FindOrCreate(cards[0]);
            }
        });
    });
}

loadCSV();

exports.Import = new Import();
