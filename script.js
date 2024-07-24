const container = document.querySelector('.container');

//This function will load on page load and create a div with 16x16 grid rows and columns
const gridBoxes = (gridRows) => {
  let grid = gridRows * gridRows;
  let boxSize = (600 / gridRows / 600) * 100;

  for (let index = 0; index <= grid; index++) {
    //We want to create a new div grid box and append this to the container
    let newBox = document.createElement('div');
    newBox.classList = 'gridBox';
    newBox.style.backgroundColor = 'white';
    newBox.style.flexBasis = String(boxSize) + '%';
    container.appendChild(newBox);
  }
};

gridBoxes(16);
