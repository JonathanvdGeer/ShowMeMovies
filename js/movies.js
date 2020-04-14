/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//--- QUERY DECLARATIES ---//
var header = document.querySelector('header');
var section = document.querySelector('section'); // Naar HTML


//------------------------------------- FILE AANVRAGEN -------------------------------------- //

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; // URL van de JSON.

var request = new XMLHttpRequest(); // Verzoek aanvragen API.

request.open('GET', requestURL); // Er staat een url, het zorgt ervoor dat het het linkje wordt geroepen.

request.responseType = 'json'; // Responsetype zeg je wat voor bestand het is. 
request.send(); // En bij send zeg je dat hij het verstuurd.


//------------------------------------- AANMAKEN: GEGEVENS LADEN EN FUNCTIE -------------------------------------- //

request.onload = function () { //Aangeven wat hij moet doen wanneer het geladen is.
    //ophalenfilms(films, 0, 2); // De functie start, de var wordt meegegeven en de aantal films worden getoond (begin en eind).

    //var films = request.response; // CHECK VOOR RESPONSE OP CONSOLE.LOG 
    console.log(request.response);
    console.log(request.response[2])
    console.log(request.response[2].title);

    showMovies(request.response);
    //titelHeader(films);
    //ShowCover(films);
    //    console.log(films);
}


//------------------------------------- VB: HTML ELEMENTEN VULLEN MET GEGEVENS JSON FILE -------------------------------------- //
// Titel --> Var --> DOM --> Element --> AppendChild name
function showMovies(movies) {
    var titel = document.createElement('h1');
    titel.textContent = movies[2].title;
    header.appendChild(titel);

    var paragraaf = document.createElement('p');
    paragraaf.textContent = movies[2].simple_plot;
    header.appendChild(paragraaf);

    var cover = document.createElement('img');
    cover.src = movies[2].cover;
    header.appendChild(cover);
}


//--- FILTER BUTTONS ---//

//filterSelection("all")
//
//function filterSelection(c) {
//    var x, i;
//    x = document.getElementsByClassName("filterDiv");
//    if (c == "all") c = "";
//    for (i = 0; i < x.length; i++) {
//        w3RemoveClass(x[i], "show");
//        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//    }
//}
//
//function w3AddClass(element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//        if (arr1.indexOf(arr2[i]) == -1) {
//            element.className += " " + arr2[i];
//        }
//    }
//}
//
//function w3RemoveClass(element, name) {
//    var i, arr1, arr2;
//    arr1 = element.className.split(" ");
//    arr2 = name.split(" ");
//    for (i = 0; i < arr2.length; i++) {
//        while (arr1.indexOf(arr2[i]) > -1) {
//            arr1.splice(arr1.indexOf(arr2[i]), 1);
//        }
//    }
//    element.className = arr1.join(" ");
//}
//
//// Add active class to the current button (highlight it)
//var btnContainer = document.getElementById("myBtnContainer");
//var btns = btnContainer.getElementsByClassName("btn");
//for (var i = 0; i < btns.length; i++) {
//    btns[i].addEventListener("click", function () {
//
//        for (var j = 0; j < btns.length; j++) {
//            btns[j].classList.remove("active");
//        }
//        this.classList.add("active");
//
//
//    });
//}


//------------------------------------- HTML ELEMENTEN VULLEN MET GEGEVENS JSON FILE -------------------------------------- //









