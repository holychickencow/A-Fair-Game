
function openSettings(){
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("settingsPage").style.display = "block";
}

function openHow(){
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("howPage").style.display = "block";
}

function openMain(){
    if(document.getElementById("settingsPage").style.display == "block"){
        document.getElementById("settingsPage").style.display = "none";
    }
    else{
        document.getElementById("howPage").style.display = "none";
    }
    document.getElementById("mainPage").style.display = "block";
}

function startGame(){
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}