document.addEventListener("DOMContentLoaded", function() {
    // Array of items to display
    var data = {
        items: [
            { title: "Item 1", description: "This is the first item.", image: "https://via.placeholder.com/150" },
            { title: "Item 2", description: "This is the second item.", image: "https://via.placeholder.com/150" },
            { title: "Item 3", description: "This is the third item.", image: "https://via.placeholder.com/150" },
            { title: "Item 4", description: "This is the fourth item.", image: "https://via.placeholder.com/150" },
            { title: "Item 5", description: "This is the fifth item.", image: "https://via.placeholder.com/150" }
        ]
    };

    // Compile and display items with Handlebars
    var template = Handlebars.compile(document.getElementById("item-template").innerHTML);
    document.getElementById("items-container").innerHTML = template(data);
});
