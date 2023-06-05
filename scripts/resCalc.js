var bismor = 0;
var croppa = 0;
var enor = 0;
var jadiz = 0;
var magnite = 0;
var umanite = 0;
var phazy = 0;

function randVal(){
    let randArr = [7];
    for (let i = 0 ; i < 7; i++){
        randArr[i] = (Math.random() * 2) - 1;
    }      
    document.getElementById("bisBuy").innerHTML = 150 + Math.ceil(150 * randArr[0]);
    document.getElementById("bisSell").innerHTML = 100 + Math.ceil(100 * randArr[0]);
    document.getElementById("croBuy").innerHTML = 150 + Math.ceil(150 * randArr[1]);
    document.getElementById("croSell").innerHTML = 100 + Math.ceil(100 * randArr[1]);
    document.getElementById("enoBuy").innerHTML = 150 + Math.ceil(150 * randArr[2]);
    document.getElementById("enoSell").innerHTML = 100 + Math.ceil(100 * randArr[2]);
    document.getElementById("jadBuy").innerHTML = 150 + Math.ceil(150 * randArr[3]);
    document.getElementById("jadSell").innerHTML = 100 + Math.ceil(100 * randArr[3]);
    document.getElementById("magBuy").innerHTML = 150 + Math.ceil(150 * randArr[4]);
    document.getElementById("magSell").innerHTML = 100 + Math.ceil(100 * randArr[4]);
    document.getElementById("umaBuy").innerHTML = 150 + Math.ceil(150 * randArr[5]);
    document.getElementById("umaSell").innerHTML = 100 + Math.ceil(100 * randArr[5]);
    document.getElementById("phaBuy").innerHTML = 150 + Math.ceil(150 * randArr[6]);
    document.getElementById("phaSell").innerHTML = 100 + Math.ceil(100 * randArr[6]);
    setTimeout("currentTime()", 600000);
}

function bismorBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (bismor >= 0){
        val += Number(document.getElementById("bisBuy").textContent);
    }
    else{
        val += Number(document.getElementById("bisSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    bismor += 1;
    let balance = document.getElementById("bisBal");
    balance.innerHTML = bismor;

}

function bismorSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (bismor <= 0){
        val -= Number(document.getElementById("bisSell").textContent);
    }
    else{
        val -= Number(document.getElementById("bisBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    bismor -= 1;
    let balance = document.getElementById("bisBal");
    balance.innerHTML = bismor;
}

function CroppaBuy(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (croppa >= 0){
        val += Number(document.getElementById("croBuy").textContent);
    }
    else{
        val += Number(document.getElementById("croSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    croppa += 1;
    let balance = document.getElementById("croBal");
    balance.innerHTML = croppa;
}

function CroppaSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (croppa <= 0){
        val -= Number(document.getElementById("croSell").textContent);
    }
    else{
        val -= Number(document.getElementById("croBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    croppa -= 1;
    let balance = document.getElementById("croBal");
    balance.innerHTML = croppa;
}

function EnorBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (enor >= 0){
        val += Number(document.getElementById("enoBuy").textContent);
    }
    else{
        val += Number(document.getElementById("enoSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    enor += 1;
    let balance = document.getElementById("enoBal");
    balance.innerHTML = enor;

}

function EnorSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (enor <= 0){
        val -= Number(document.getElementById("enoSell").textContent);
    }
    else{
        val -= Number(document.getElementById("enoBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    enor -= 1;
    let balance = document.getElementById("enoBal");
    balance.innerHTML = enor;
}

function JadizBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (jadiz >= 0){
        val += Number(document.getElementById("jadBuy").textContent);
    }
    else{
        val += Number(document.getElementById("jadSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    jadiz += 1;
    let balance = document.getElementById("jadBal");
    balance.innerHTML = jadiz;

}

function JadizSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (jadiz <= 0){
        val -= Number(document.getElementById("jadSell").textContent);
    }
    else{
        val -= Number(document.getElementById("jadBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    jadiz -= 1;
    let balance = document.getElementById("jadBal");
    balance.innerHTML = jadiz;
}

function MagniteBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (magnite >= 0){
        val += Number(document.getElementById("magBuy").textContent);
    }
    else{
        val += Number(document.getElementById("magSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    magnite += 1;
    let balance = document.getElementById("magBal");
    balance.innerHTML = magnite;

}

function MagniteSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (magnite <= 0){
        val -= Number(document.getElementById("magSell").textContent);
    }
    else{
        val -= Number(document.getElementById("magBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    magnite -= 1;
    let balance = document.getElementById("jadBal");
    balance.innerHTML = magnite;
}

function UmaniteBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (umanite >= 0){
        val += Number(document.getElementById("umaBuy").textContent);
    }
    else{
        val += Number(document.getElementById("umaSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    umanite += 1;
    let balance = document.getElementById("umaBal");
    balance.innerHTML = umanite;

}

function UmaniteSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (umanite <= 0){
        val -= Number(document.getElementById("umaSell").textContent);
    }
    else{
        val -= Number(document.getElementById("umaBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    umanite -= 1;
    let balance = document.getElementById("umaBal");
    balance.innerHTML = umanite;
}

function PhaBuy(){
    
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (phazy >= 0){
        val += Number(document.getElementById("phaBuy").textContent);
    }
    else{
        val += Number(document.getElementById("phaSell").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    phazy += 1;
    let balance = document.getElementById("phaBal");
    balance.innerHTML = phazy;

}

function PhaSell(){
    let out = document.getElementById("outcome");
    let val = Number(out.textContent);
    if (phazy <= 0){
        val -= Number(document.getElementById("phaSell").textContent);
    }
    else{
        val -= Number(document.getElementById("phaBuy").textContent);
    }
    out.removeChild(out.firstChild);
    document.getElementById("outcome").innerHTML = val;
    phazy -= 1;
    let balance = document.getElementById("phaBal");
    balance.innerHTML = phazy;
}

function currentTime(){
    var today = new Date();

    var ans = today.toLocaleDateString("en-GB", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })

    var hour = today.getHours();
    if(hour<10)
        hour = "0"+hour;

    var minute = today.getMinutes();
    if(minute<10)
        minute = "0"+minute;

    var second = today.getSeconds();
    if(second<10)
        second = "0"+second;

    document.getElementById("cur-time").innerHTML = ans+" | "+hour+":"+minute+":"+second;
    
    setTimeout("currentTime()", 1000);
}

currentTime();
randVal();