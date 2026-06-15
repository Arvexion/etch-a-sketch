const GRID_SIZE = 16
createSquareGrid(GRID_SIZE);

function createSquareGrid(size) {
    const container = document.querySelector('.grid-container'); 
    const totalItems = size * size;

    container.innerHTML = '';

    const itemWidth = 100 / size;

    for (let i = 0; i < totalItems; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style.flex = `0 0 ${itemWidth}%`;
        container.appendChild(item);     
    }
    
    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = 'black';
        }
    });

    container.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('grid-item')) {
            e.target.style.backgroundColor = '';
        }
    });
}