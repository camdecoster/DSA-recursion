// Write a recursive function that splits a string based on a separator (similar to
// String.prototype.split). Don't use JS array's split function to solve this
// problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function stringSplitter(stringToSplit, separator) {
    const searchResult = stringToSplit.search(separator);
    if (searchResult === -1) {
        return [stringToSplit];
    } else {
        return [stringToSplit.slice(0, searchResult)].concat(
            stringSplitter(stringToSplit.slice(searchResult + 1), separator)
        );
    }
}

console.log(stringSplitter("02/20/2020", "/"));
