function yo() {
    console.log("hi yo")
}


function math_like(exam,td,average,co){
    var a = parseFloat(document.getElementById(exam).value) ;
    var b = parseFloat(document.getElementById(td).value) ;
    if(!isNaN(a) && !isNaN(b)){
        document.getElementById(average).innerHTML = (((a*0.6)+(b*0.4))*co).toFixed(2);
        return (((a*0.6)+(b*0.4))*3).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}

function phy_like(exam,td,tp,average,co){
    var a = parseFloat(document.getElementById(exam).value) || null ;
    var b = parseFloat(document.getElementById(td).value) || null;
    var c = parseFloat(document.getElementById(tp).value) || null;
    if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
        document.getElementById(average).innerHTML = ((((a*0.6)+(b*0.4))*co)+c).toFixed(2);
        return ((((a*0.6)+(b*0.4))*3)+c).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}

function en_like(exam,average,co){
    var a = parseFloat(document.getElementById(exam).value) ;
    if(!isNaN(a)){
        document.getElementById(average).innerHTML = (a*co).toFixed(2);
        return (a*co).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}
function all_s1(){
    document.getElementById("a1").pause();
    document.getElementById("a2").pause();
    document.getElementById("a3").pause();
    var a = parseFloat(document.getElementById("math-g").innerHTML);
    var b = parseFloat(document.getElementById("phy-g").innerHTML);
    var c = parseFloat(document.getElementById("chemi-g").innerHTML);
    var d = parseFloat(document.getElementById("info-g").innerHTML);
    var e = parseFloat(document.getElementById("method-g").innerHTML);
    var f = parseFloat(document.getElementById("st-g").innerHTML);
    var g = parseFloat(document.getElementById("ethics-g").innerHTML);
    var h = parseFloat(document.getElementById("en-g").innerHTML);
    var s1 = ((a + b + c + d + e + f + g + h) / 17).toFixed(2) ;
    
    var c9 = document.getElementById("card9"); 
    var g_vd = document.getElementById("grade_vd");
    var fs = document.getElementById("fullscreenDiv");
    
    if(!isNaN(s1)){
        //document.getElementById("card9").style.backgroundImage = "url('img/skull.png')";
        document.getElementById("fullscreenDiv").style.display = "flex";
        document.getElementById("bt").style.opacity = 0.3;
        //document.getElementById("a1").stop();
        //document.getElementById("a2").stop();
        //document.getElementById("a3").stop();
        console.log("hi");
        setTimeout(function() {
            document.getElementById("fullscreenDiv").style.display = "none";
            
    }, 1000);
        
        
        
        if (s1<10 && s1>= 0) {
            document.getElementById("Grade").innerHTML = s1;
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/9d79d31e-fe60-4bfb-a5b7-c783562eb690/skull.png?v=1714265997912')";
            document.getElementById("a1").play();
        }
        if (s1>=10 && s1<13 ) {
            document.getElementById("Grade").innerHTML = s1;
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/9d79d31e-fe60-4bfb-a5b7-c783562eb690/is.png?v=1714266199688')";
            document.getElementById("a2").play();
        }
        if (s1>=13 && s1<=20) {
            document.getElementById("Grade").innerHTML = s1;
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/9d79d31e-fe60-4bfb-a5b7-c783562eb690/hts.png?v=1714266169805')";
            document.getElementById("a3").play();
        } 
        if (s1 < 0 || s1 > 20 ){
            document.getElementById("Grade").innerHTML = s1;
            
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/9d79d31e-fe60-4bfb-a5b7-c783562eb690/cp.png?v=1714266078190')";
            document.getElementById("bt").style.opacity = 1;
            alert("روح لداركم خير أنت مش تاع قرايا!");
        }
    }else{
        alert("Error, Enter all your notes!.");
        alert("!خطأ, يرجى إدخال كل علاماتك")
        document.getElementById("Grade").innerHTML = "Note";
    }
    
}

setInterval(function() {
    math_like("math-e", "math-d", "math-g",3);
    phy_like("phy-e","phy-d","phy-p","phy-g",3);
    phy_like("chemi-e","chemi-d","chemi-p","chemi-g",3);
    math_like("info-e", "info-p", "info-g",2);
    en_like("method-e","method-g",1);
    en_like("st-e","st-g",1);
    en_like("ethics-e","ethics-g",1);
    en_like("en-e","en-g",1);
    //all_s1();
}, 2000);