// My converter function!
const numToRoman = (num) => {

    return num === 1 ? "I" : num === 2 ? "II" : "III" ;
};

// Exporting the function to be used in another file
module.exports = { numToRoman };