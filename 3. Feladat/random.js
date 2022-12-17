function randomSelection(inputList) {
  var selectedElements = [];

  for (var i = 0; i < 3; i++) {
    var randomIndex = Math.floor(Math.random() * inputList.length);

    selectedElements.push(inputList[randomIndex]);

    inputList.splice(randomIndex, 1);
  }

  return selectedElements;
}

var inputList = ['one', 'two', 'three', 'four', 'five', 'six'];
var selectedElements = randomSelection(inputList);
console.log(selectedElements);