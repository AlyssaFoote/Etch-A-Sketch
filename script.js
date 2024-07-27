const container = document.querySelector('.container');
const output = document.querySelector('output');

//On page load, create a div with 16x16 grid rows and columns
const gridBoxes = (gridRows) => {
  let grid = gridRows * gridRows;
  let boxSize = (600 / gridRows / 600) * 100;

  for (let index = 0; index < grid; index++) {
    //We want to create a new div grid box and append this to the container
    let newBox = document.createElement('div');
    newBox.classList = 'gridBox';
    newBox.style.backgroundColor = 'white';
    newBox.style.flexBasis = String(boxSize) + '%';
    container.appendChild(newBox);
  }
};

gridBoxes(output.textContent);

addGlobalEventListener('mouseup', 'input', (e) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  gridBoxes(output.textContent);
});

//Generate a random color
let getRandomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
};

//Add a hover effect so that when the user mouses over a box (input), the color of the box
//changes color (output)

//Add a new style.backgroundColor to change the background for each box
//Need to do this via event delegation.

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('mouseover', '.gridBox', (e) => {
  e.target.style.backgroundColor = getRandomColor();
});

function getValue() {
  let power = input.value;
  let result = Math.pow(10, +power);
  output.value = result;
}
