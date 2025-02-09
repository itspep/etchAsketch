const gridContainer = document.querySelector('#grid-container');
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeValue = document.querySelector('#grid-size-value');

function createGrid(squaresPerSide) {
    gridContainer.innerHTML = ''; // Clear existing grid

    const containerSize = 500; // Match CSS container size
    const itemSize = containerSize / squaresPerSide; // Dynamically adjust item size

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;

        // Hover effect
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });

        gridContainer.appendChild(gridItem);
    }
}

// Initialize grid with default 16x16
createGrid(16);

gridSizeSlider.addEventListener('input', () => {
    const squaresPerSide = gridSizeSlider.value;
    gridSizeValue.textContent = squaresPerSide; // Update displayed value
    createGrid(squaresPerSide);
});
