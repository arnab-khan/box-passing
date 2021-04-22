// start road 
var rolip=-10;
var rolim=0;





for (let rolif = 0; rolif <=10; rolif++) {
    var roli=document.createElement("div");
    roli.className="roli";
    document.getElementsByClassName("mainroli1")[0].appendChild(roli);
    // console.log(roli);
    roli.style.top=rolip+"%";

    var roli2=document.createElement("div");
    roli2.className="roli2";
    document.getElementsByClassName("mainroli2")[0].appendChild(roli2);
    // console.log(roli2);
    roli2.style.top=rolip+"%";

    var roli=document.createElement("div");
    roli.className="roli";
    document.getElementsByClassName("mainroli11")[0].appendChild(roli);
    // console.log(roli);
    roli.style.top=rolip+"%";

    var roli2=document.createElement("div");
    roli2.className="roli2";
    document.getElementsByClassName("mainroli22")[0].appendChild(roli2);
    // console.log(roli2);
    roli2.style.top=rolip+"%";

    rolip=rolip+10;

}
// end of road 

// start mydiv 

    

    function road1() {
        document.getElementsByClassName("mydiv")[0].style.left="6%";
    }
    function road2() {
        document.getElementsByClassName("mydiv")[0].style.left="40%";
    }
    function road3() {
        document.getElementsByClassName("mydiv")[0].style.left="74%";
    }
    // end my div 

    // start key press event
    var ke;
    window.addEventListener("keydown",ke);
    function ke() {
        ke=event.keyCode;
        // console.log(ke);
        if (ke==37) {
            road1();
        }
        else if (ke==38) {
            road2();
        }
        else if (ke==39) {
            road3();
        }
    }
    // ene key press event 
    
    // srart otdiv 

    var rahi1;
    var rahi2;
    var otdiv1;
    var otdiv2;
    otdiv1=document.getElementsByClassName("otdiv")[0];
    otdiv2=document.getElementsByClassName("otdiv")[1];
    
function ran1() {

    
    
    
    // console.log(otdiv1);
    // console.log(otdiv2);
    var rale=Math.trunc(Math.random()*3);
    if (rale==0) {
        otdiv1.style.left="6%";
        otdiv2.style.left="40%";
    }
    else if (rale==1) {
        otdiv1.style.left="6%";
        otdiv2.style.left="74%"
    }
    if (rale==2) {
        otdiv1.style.left="40%";
        otdiv2.style.left="74%";
    }
    rahi1=Math.trunc(Math.random()*-60);
    rahi2=Math.trunc(Math.random()*-60);

}

    var rahi3;
    var rahi4;
    var otdiv3;
    var otdiv4;
    otdiv3=document.getElementsByClassName("otdiv")[2];
    otdiv4=document.getElementsByClassName("otdiv")[3];
    
function ran2() {
    

    
    var rale2=Math.trunc(Math.random()*3);
    if (rale2==0) {
        otdiv3.style.left="6%";
        otdiv4.style.left="40%";
    }
    else if (rale2==1) {
        otdiv3.style.left="6%";
        otdiv4.style.left="74%"
    }
    if (rale2==2) {
        otdiv3.style.left="40%";
        otdiv4.style.left="74%";
    }
    rahi3=(Math.trunc(Math.random()*-60))-100;
    rahi4=(Math.trunc(Math.random()*-60))-100;  
    
}

    // console.log(rale);



// end otdiv 

// start buttom start
var ti; 
var ottop;
function start() {
    ran1();
    ran2();
    ti=setInterval(ti,10);
    document.getElementsByClassName("start")[0].style.display="none";
    
}
// start buttom end 

// start move otdiv

var otpos;
var otpo;
var robot;
var score=0;
var roli1=0;
var roli11=-100;
var roli2=0;
var roli22=-100;
var hiscore;
var acc=0;

 
function ti() {
    acc=acc+.0001

    rahi1=rahi1+.1+acc;
    rahi2=rahi2+.1+acc;
    otdiv1.style.top=rahi1+"%";
    otdiv2.style.top=rahi2+"%";

    rahi3=rahi3+.1+acc;
    rahi4=rahi4+.1+acc;
    otdiv3.style.top=rahi3+"%";
    otdiv4.style.top=rahi4+"%";

//   start find div position
    robot=document.getElementsByClassName("road")[0].getBoundingClientRect().bottom
    otpos1=otdiv1.getBoundingClientRect();
    ottop1=otpos1.top;
    otpos2=otdiv2.getBoundingClientRect();
    ottop2=otpos2.top;

    otpos3=otdiv3.getBoundingClientRect();
    ottop3=otpos3.top;
    otpos4=otdiv4.getBoundingClientRect();
    ottop4=otpos4.top;
    // end find div position 

    // srart repeat 
    if (ottop1>=robot && ottop2>=robot) {
        // console.log("call");
        ran1();
        rahi1=(Math.trunc(Math.random()*-60)-100);
        rahi2=(Math.trunc(Math.random()*-60)-100);
        score=score+2;
    }

    if (ottop3>=robot && ottop4>=robot) {
        // console.log("call");
        ran2();
        rahi3=(Math.trunc(Math.random()*-60)-100);
        rahi4=(Math.trunc(Math.random()*-60)-100);
        score=score+2;
    }
    // end repeat 

// console.log(ottop2);
// console.log(score);

// start score 
document.getElementsByClassName("cuscore")[0].innerHTML="SCORE:<br>"+score;
// end score 

// start collision 
    var cosem= document.getElementsByClassName("mydiv")[0].getBoundingClientRect();
    var lefm=cosem.left;
    var rigm=cosem.right;
    var topm=cosem.top;
    var botm=cosem.bottom;
for (let co = 0; co <=3; co++) {
    
    let cose= document.getElementsByClassName("otdiv")[co].getBoundingClientRect();
    let lef=cose.left;
    let rig=cose.right;
    let top=cose.top;
    let bot=cose.bottom;
    
    if (topm<=bot && lefm<=rig && rigm>=lef && botm>=top) {
        clearInterval(ti);
        document.getElementsByClassName("restart")[0].style.display="flex";
        
        // start hight score
        hiscore=localStorage.getItem("hi"); 
        if (score>=hiscore) {
            localStorage.setItem("hi",score);
            hiscore=localStorage.getItem("hi")
            document.getElementsByClassName("hiscore")[0].innerHTML="HIGHT SCORE:<br>"+hiscore;
        }
        // end highi score 
    }
}
// end collition 

// move lode line 
roli1=roli1+.05;
document.getElementsByClassName("mainroli1")[0].style.top=roli1+"%";
if (roli1>=100) {
    roli1=-100;
}
roli11=roli11+.05;
document.getElementsByClassName("mainroli11")[0].style.top=roli11+"%";
if (roli11>=100) {
    roli11=-100;
}

roli2=roli2+.05;
document.getElementsByClassName("mainroli2")[0].style.top=roli2+"%";
if (roli2>=100) {
    roli2=-100;
}
roli22=roli22+.05;
document.getElementsByClassName("mainroli22")[0].style.top=roli22+"%";
if (roli22>=100) {
    roli22=-100;
}
// end move road line 

}


// end move otdiv 

function restart() {
    location.reload();
}

// start hight score 
hiscore=localStorage.getItem("hi");
document.getElementsByClassName("hiscore")[0].innerHTML="HIGHT SCORE:<br>"+hiscore;
// console.log(hiscore);
if (hiscore==null) {
    document.getElementsByClassName("hiscore")[0].innerHTML="HIGHT SCORE:<br>"+0;
}
function clea() {
    hiscore=localStorage.setItem("hi",0);
    document.getElementsByClassName("hiscore")[0].innerHTML="HIGHT SCORE:<br>"+0;
}

    
    



