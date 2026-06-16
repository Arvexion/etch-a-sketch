// All possible colors for the randomizer
const gridColors = ['black', 'white', 'red', 'blue', 'yellow', 'green']

const gridSize = document.querySelector('.grid-size')

gridSize.addEventListener('click', () => {
    // Gets the user input and checks it
    let userInput = prompt('Preferred Size:', 16)

    while (userInput === null || userInput.trim() === '' || isNaN(userInput) || Number(userInput) <= 0 || Number(userInput) > 100) {
        alert('Invalid Input!')
        userInput = prompt('Preferred Size:', 16)
    }

    createSquareGrid(Number(userInput));
});

// Creates a grid of squares with hover effect to each item
function createSquareGrid(size) {
    const container = document.querySelector('.grid-container'); 
    const totalItems = size * size;

    container.innerHTML = '';

    const itemWidth = 100 / size;

    // Create each square based on the size
    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style.flex = `0 0 ${itemWidth}%`;
        container.appendChild(item);     
    }
    
    // Add hover effect to darken and randomize the square color when hovered
    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid-item')) {
            let currentOpacity = Number(e.target.dataset.opacity) || 0;
            if (currentOpacity < 100) {
                currentOpacity += 10;
                e.target.dataset.opacity = currentOpacity;
            } 
    
            const randomIndex = Math.floor(Math.random() * gridColors.length);
            const randomGridColor = gridColors[randomIndex]

            e.target.style.backgroundColor = `color-mix(in srgb, ${randomGridColor}, black ${currentOpacity}%)`;
        }
    });

    // Remove the effect once the mouse leaves the square
    container.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = '';
        }
    });
}