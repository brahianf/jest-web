const randomString = require('../index');
const reverseString2 = require('../index');

describe('Probar funcionalidades randomString', () => {
    test('Probar funcionalidad', () => {
        expect(typeof(randomString())).toBe('string')
    });
    test('Comprobar que no existe ciudad', () => {
        expect(randomString()).not.toMatch('Ar');
    });
});

test('Probar una promesa', () => {
    return reverseString2('Hell')
        .then(string => {
            expect(string).toBe('lleH')
        })
});

test('Probar una promesa', () => {
    return reverseString2('Hell')
        .then(string => {
            expect(string).toBe('lleH')
        })
});