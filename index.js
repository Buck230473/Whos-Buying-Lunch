//pass an array with a list of names to whosPaying.
//randomly select a person to pay for lunch and return the result.

function whosPaying(names) {

  var numberOfPeople = names.length;
  var randomPersonPosition = (Math.floor(Math.random() * numberOfPeople));
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today";
}

var hungryPeople = ["Chris", "Dave", "John", "Daisy"];

whosPaying(hungryPeople);
