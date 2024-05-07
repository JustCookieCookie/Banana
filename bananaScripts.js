let timer = 0;
setInterval(function() {
    timer++;

    let pageWidth = document.documentElement.scrollWidth;
    if (pageWidth >= 900)
    {
        if (timer < 100) {
            document.getElementById("timer").textContent = "Вы на сайте: " + timer + " секунд!";
        } else if (timer >= 100) {
            document.getElementById("timer").textContent = "Вы на сайте: " + timer + " секунд!";

            document.getElementById("textYou").style.textAlign = "center";
            document.getElementById("textYou").style.marginTop = "-78px";

            document.getElementById("textYou").textContent = "Ты молодец";
        }
    } else if (pageWidth < 900)
    {
        if (timer < 100) {
            document.getElementById("timer").textContent = "Вы на сайте: " + timer + " секунд!";
        } else if (timer >= 100) {
            document.getElementById("timer").textContent = "Вы на сайте: " + timer + " секунд!";
            document.getElementById("textYou").textContent = "Ты молодец";
        }
    }

}, 1000);