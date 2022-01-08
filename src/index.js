module.exports = function toReadable (number) {

    let numToTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    
    let numToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20) {
        return numToTwenty[number];
    } else if (number < 100) {
        let str = numToNinety[Math.floor(number / 10) - 2];
        return !(number % 10) ? str : str + " " + numToTwenty[number % 10];
    } else {
        let str = numToTwenty[Math.floor(number / 100)] + ' ' + 'hundred';
        return !(number % 100) ? str : str + " " + toReadable(number % 100);
    }
};


