
let searchInput = document.getElementById("search");

let products = document.querySelectorAll("ul li");

searchInput.addEventListener("keyup", function () {
    
    let searchValue = searchInput.value.toLowerCase();

    products.forEach(function (item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

});