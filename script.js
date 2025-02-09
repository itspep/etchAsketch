const grid_container = document.querySelector('#grid-container');
const rows = 16;
const columns = 16;

for(let i = 0; i<rows * columns; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = 'black';
    });
    grid_container.appendChild(gridItem);
}
