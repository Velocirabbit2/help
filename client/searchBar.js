class SearchBar {
    constructor(el) {
        // this.node = document.createElement('input');
        // this.node.setAttribute('id', 'searchBar');
        // this.node.setAttribute("type", "form");
        this.node = document.createElement("FORM");
        this.node.setAttribute("id", "myForm");
        document.body.appendChild(this.node)
        
        var y = document.createElement("INPUT");
        y.setAttribute('id', 'form-input');
        y.setAttribute("type", "text");
        y.setAttribute("value", "Donald");
        document.getElementById("myForm").appendChild(y);

        let button = document.createElement('button');
        button.setAttribute('id', 'submit-button');
        button.setAttribute("text", 'SUBMIT');
        document.body.appendChild(button);
        
        // this.node.setAttribute("value", "Enter location!")
        console.log(this.node)

        el.appendChild(this.node);

        this.node.style.top = 50;
        this.node.style.left = 50;

        
        
        document.getElementById(
            "searchBar").onchange = function() {
                handleSearchRestaurant()
            };
            
            function handleSearchRestaurant() {
                let x = document.getElementById("searchBar");
                console.log(this.node);
            }
        }
}








class SearchButton {
    constructor(el) {
        this.node = document.createElement('button');

    }
}