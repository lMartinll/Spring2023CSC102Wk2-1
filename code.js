function blastoffTimer(){
    console.log("blastoffTimer() started");
    //variable to keep time
    var currTime = 50;
    //timer at 20
    setTimeout(function() {
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 18
    setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 5000);

     //timer at 16
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 10000);

     //timer at 14
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 15000);

     //timer at 12
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 20000);

     //timer at 10
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 25000);

     //timer at 8
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 30000);

     //timer at 6
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 35000);

     //timer at 4
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 40000);

     //timer at 2
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 45000);

     //timer at blastoff
     setTimeout(function() {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
    }, 50000);
}