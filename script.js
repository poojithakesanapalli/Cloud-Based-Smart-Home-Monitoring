function toggleDevice(statusId, button) {

    const status = document.getElementById(statusId);

    if(status.innerText === "OFF"){
        status.innerText = "ON";
        status.style.color = "#22c55e";
        button.innerText = "Turn OFF";
    }
    else{
        status.innerText = "OFF";
        status.style.color = "#ef4444";
        button.innerText = "Turn ON";
    }

}

function updateTemperature(){

    let temp = Math.floor(Math.random()*8)+24;

    document.getElementById("temperature").innerHTML=temp+"°C";

}

function toggleDoor(button){

    const door=document.getElementById("doorStatus");

    if(door.innerText=="Closed"){

        door.innerText="Open";

        door.style.color="#22c55e";

        button.innerText="Close Door";

    }

    else{

        door.innerText="Closed";

        door.style.color="#ef4444";

        button.innerText="Open Door";

    }

}

function sendAlert(){

    document.getElementById("security").innerHTML="⚠ Motion Detected";

    alert("Notification sent successfully through AWS Cloud.");

}