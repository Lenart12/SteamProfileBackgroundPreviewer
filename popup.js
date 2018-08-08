$(function () {
    var link = $("linkBox").val();

    $("#linkBox").on("change paste keyup", function () {
        link = $(this).val();
    });
    $("#goButton").click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { todo: "changeImage", imageLink: link});
        });
    });
});