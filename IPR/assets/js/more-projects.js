var itens = 9;
var card = document.querySelectorAll(".card-projects");
for (var x = 0; x < itens; x++) {
    card[x].style.display = "block";
}

document.querySelector(".btn-more").addEventListener("click", function() {

    var listCard = document.querySelectorAll(".card-projects");
    var list = 0;
    var button = document.querySelectorAll(".btn-more");
    for (var x = 0; x < listCard.length; x++) {
        if (listCard[x].style.display == "block") list++;
    }

    var limite = list + itens > card.length - 1 ? card.length : list + itens;

    for (var x = list; x < limite; x++) {
        card[x].style.display = "block";
    }
    if (card.length - list) document.querySelector(".btn-more").outerHTML = '';
});