var searchRequestSubmit = document.getElementById("indexForm");

function onSearchClick(event){
    event.preventDefault();
    var searchTerm = event.getElementById("query");
    var searchFormat = event.getElementById("format");
    window.open("../../search-results.html?" + "searchTerm=" + searchTerm + "&searchFormat=" + searchFormat);
}

searchRequestSubmit.addEventListener("submit", onSearchClick)