const text = "Im brahianf"
const arr = ["food1","food2","foot3"]

test('debe contener string', () => {
    expect(text).toMatch(/brahianf/)
});

test('Tener food2', () => {
    expect(arr).toContain('food2')
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
    expect(true).toBeTruthy()
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar Callback', () => {
    reverseString('Hell', (str) => {
        expect(str).toBe('lleH')
    })
});

const reverseString2 = str => {
    return new Promise ((resolve, reject) => {
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('Probar una promesa', () => {
    return reverseString2('Hell')
        .then(string => {
            expect(string).toBe('lleH')
        })
});

test('Probar Async/await', async () => {
    const string = await reverseString2('Hell');
    expect(string).toBe('lleH')
});

afterEach(() => {console.log('after Each test')});
afterAll(() =>console.log('after all test'))

beforeEach(() => console.group('before each text'))
beforeAll(() => console.group('before all text'))