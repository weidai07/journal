export function Journal(date, body){
  this.date = date,
  this.body = body;
  this.bodyArray = body.split(' ');
}

Journal.prototype.numWords = function(){
  var tempArray = this.bodyArray;
  var numWords = 0;
  tempArray.forEach(function(){
    numWords++;
  });
  return numWords;
};

Journal.prototype.vowelsAndConsonants = function(){
  var tempArray = this.bodyArray;
  var tempString = tempArray.join('');
  var regex = /[aeiou]+/i;
  var vowels = 0;
  var consonants = 0;
  for (var i = 0; i < tempString.length; i++){
    if (regex.test(tempString.charAt(i))){
      vowels++;
    } else {
      consonants++;
    }
  }
  return ("Your text has " + vowels + " vowels, and " + consonants + " consonants");
};

Journal.prototype.getTeaser = function(){
  var tempWords = this.bodyArray;
  var returnString = "";
  var regex = /\./;
  for (var i = 0; i < tempWords.length; i++) {
    returnString += tempWords[i] + " ";
    if (regex.test(tempWords[i]) && i < 8) {
      return returnString;
    } else if (i == 7) {
      return returnString;
    }
  }
};
