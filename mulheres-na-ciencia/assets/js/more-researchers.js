var itens = 6;
var card = document.querySelectorAll(".card-researchers");
for (var x = 0; x < itens; x++) {
    card[x].style.display = "block";
}

document.querySelector(".more-researchers").addEventListener("click", function() {

    var listCard = document.querySelectorAll(".card-researchers");
    var list = 0;
    var button = document.querySelectorAll(".more-researchers");
    for (var x = 0; x < listCard.length; x++) {
        if (listCard[x].style.display == "block") list++;
    }

    var limite = list + itens > card.length - 1 ? card.length : list + itens;

    for (var x = list; x < limite; x++) {
        card[x].style.display = "block";
    }
    if (card.length - list) document.querySelector(".more-researchers").outerHTML = '';
});