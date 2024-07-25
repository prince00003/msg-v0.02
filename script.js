const msgBox = document.getElementById('msgbox');
const input = document.getElementById('input');
const button = document.getElementById('sendbtn');


function sendMsg() {
    const msgDiv = document.createElement('div');
    msgDiv.className = "msgdiv";
    msgDiv.innerText = input.value;
    msgBox.append(msgDiv);
};

button.onclick = sendMsg;

input.onkeyup = function handinput(event) {
    if (event.key === "Enter") {
        sendMsg();
    }
};