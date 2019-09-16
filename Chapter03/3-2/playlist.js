function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

window.onload = init;

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    alert("Adding " + songName);

    var li = document.createElement("li");
    li.innerHTML = songName;

    var ul = document.getElementById("playlist");
    ul.appendChild(li);
}