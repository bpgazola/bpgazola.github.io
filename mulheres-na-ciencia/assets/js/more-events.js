var itensEvents = 3;
var cardEvents = document.querySelectorAll(".card-events");
for (var x = 0; x < itensEvents; x++) {
    cardEvents[x].style.display = "block";
}

document.querySelector(".more-events").addEventListener("click", function() {

    var listCardEvents = document.querySelectorAll(".card-events");
    var listEvents = 0;
    var button = document.querySelectorAll(".more-events");
    for (var x = 0; x < listCardEvents.length; x++) {
        if (listCardEvents[x].style.display == "block") listEvents++;
    }

    var limiteEvents = listEvents + itensEvents > cardEvents.length - 1 ? cardEvents.length : listEvents + itensEvents;

    for (var x = listEvents; x < limiteEvents; x++) {
        cardEvents[x].style.display = "block";
    }
    if (cardEvents.length - listEvents) document.querySelector(".more-events").outerHTML = '';
});