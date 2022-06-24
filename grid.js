function buttonClickHandler(action) {
  const container = document.getElementById("container");
  const elementsArray = Array.prototype.slice.call(
    container.getElementsByClassName("shuffle")
  );
  elementsArray.forEach((element) => container.removeChild(element));

  action === 'shuffle' ? shuffleArray(elementsArray) : sortArray(elementsArray, 'className');
  
  elementsArray.forEach((element) => container.appendChild(element));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function sortArray(elementsArray, sortProperty) {
    return elementsArray.sort((a,b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));
}
