// function makeSearchBar() {
//     const searchBar = document.createElement("INPUT");
//     searchBar.setAttribute("type", "text");
//     searchBar.setAttribute("value", "Hello, Bryan!");
//     document.body.appendChild(searchBar);
// }

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('#chicken');
    // const board = document.querySelector('#board');

  
        new SearchBar(body);

        
    
    
    // const searchBar = new SearchBar(board);
    // searchBar();
    // new SearchBar(board);
   //makeSearchBar(board);

})