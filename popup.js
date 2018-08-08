var links = new Array();

function changeImage(link) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { todo: "changeImage", imageLink: link });
    });
}

function addImageHistory(link) {
    if (links.includes(link)) {
        return;
    }
    else {
        links.push(link);
        var history = document.getElementById("history");
        var image = document.createElement("img");
        image.src = link;
        image.width = "150";
        image.onclick = function () {
            changeImage(link);
        };
        history.appendChild(image);
    }
}

$(function () {

    var link = $("linkBox").val();


    $("#linkBox").on("change paste keyup", function () {
        link = $(this).val();
    });
    $("#linkBox").click(function () {
        $("#linkBox").select();
    });
    $("#goButton").click(function () {
        changeImage(link);
        addImageHistory(link);
    });
});