/* eslint-disable no-undef */
import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './assignment-functions.js'

test('Return first letter of string capitalized', ()=> {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('Return reversed string', () => {
    expect(reverseString('reverse me')).toBe('em esrever');
});

test('Check calculator functions work', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(2, 6)).toBe(12);
    expect(calculator.divide(10, 2)).toBe(5);
})

test('return Shifted string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');

});

test('return Shifted string while preserving upper case / lower case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');

});

test('return Shifted string while preserving case and punctiation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');

});

test('take array and return: average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual( {
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})
