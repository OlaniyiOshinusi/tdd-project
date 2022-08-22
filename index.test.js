// Roman Numerals Converter
const { numToRoman } = require('./index.js')

// Smoke Test - Checks that jest is working!
describe("check that Jest is working", () => {
    test("that 2+2 is 4", () => {
        expect(2+2).toBe(4);
    })
});

describe("tests function numToRoman", () => {
    test("that 1 is I in Roman Numerals", () => {
        expect(numToRoman(1)).toBe("I");
    });
    test("that 2 is II in Roman Numerals", () => {
        expect(numToRoman(2)).toBe("II");
    });
    test("that 3 is III in Roman Numerals", () => {
        expect(numToRoman(3)).toBe("III");
    });
});