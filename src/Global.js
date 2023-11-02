export default function ReadMore() {
    
    let main = document.getElementById('main');
    main.style.transform = "translateX(-1450px)";
    main.style.transitionDuration = "600ms";
 
    // window.location.href = '/about';
    setTimeout(function() {
        window.location.href = '/about';
    }, 450); // 3000 milliseconds (3 seconds)

}

export function performSearch() {
    document.addEventListener('DOMContentLoaded', function () {
        const searchQuery = document.getElementById('searchInput').value.toLowerCase();
        const elementsToSearch = document.querySelectorAll('*'); // Select all elements in the DOM
    
        elementsToSearch.forEach((element) => {
        const elementText = element.textContent.toLowerCase();
    
        if (elementText.includes(searchQuery)) {
            // Element contains the search query
            element.style.display = 'block'; // Show the element
        } else {
            // Element does not contain the search query
            element.style.display = 'none'; // Hide the element
        }
        });
    });
  }
  