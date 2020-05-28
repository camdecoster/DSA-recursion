// Write a function that reverses a string. Take a string as input, reverse the
// string, and return the new string.

function reverseString(stringToReverse) {
    if (stringToReverse.length === 1) {
        return stringToReverse;
    } else {
        return (
            stringToReverse.slice(-1) +
            reverseString(stringToReverse.slice(0, -1))
        );
    }
}

console.log(reverseString("run to the river"));
