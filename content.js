chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "changeImage") {
        var link = request.imageLink;
        var profile_page = document.getElementsByClassName("profile_page")[1];
        var background_image = document.getElementsByClassName("profile_background_image_content")[0];

        if (profile_page.classList.contains("has_profile_background") == false) {
            var profile_content = document.getElementsByClassName("profile_content")[0];
            profile_page.classList.add("has_profile_background");
            profile_content.classList.add("has_profile_background");
            var background_holder = '<div class="profile_background_holder_content"><div'
                                  + ' class="profile_background_overlay_content"></div><div class="pro'
                                  + 'file_background_image_content " style=""></div></div>';
            profile_content.insertAdjacentHTML("afterbegin", background_holder);
            background_image = document.getElementsByClassName("profile_background_image_content")[0];
        }


        profile_page.style.backgroundImage = "url(" + link + ")";
        background_image.style.backgroundImage = "url(" + link + ")";
    }
});