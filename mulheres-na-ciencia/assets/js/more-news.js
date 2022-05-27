var itensNews = 3;
var cardNews = document.querySelectorAll(".card-news");
for (var x = 0; x < itensNews; x++) {
    cardNews[x].style.display = "block";
}

document.querySelector(".more-news").addEventListener("click", function() {

    var listCardNews = document.querySelectorAll(".card-news");
    var listNews = 0;
    var button = document.querySelectorAll(".more-news");
    for (var x = 0; x < listCardNews.length; x++) {
        if (listCardNews[x].style.display == "block") listNews++;
    }

    var limiteNews = listNews + itensNews > cardNews.length - 1 ? cardNews.length : listNews + itensNews;

    for (var x = listNews; x < limiteNews; x++) {
        cardNews[x].style.display = "block";
    }
    if (cardNews.length - listNews) document.querySelector(".more-news").outerHTML = '';
});