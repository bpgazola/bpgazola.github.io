filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("element-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        elementRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) elementAddClass(x[i], "show");
    }
}

// Adicionando classe mostrar os elementos
function elementAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

// Removendo classe mostrar os elementos
function elementRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Classe para botão ativo
var btnContainer = document.getElementsByClassName("filters");
var btn = btnContainer.getElementsByClassName("filter-researchers");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}