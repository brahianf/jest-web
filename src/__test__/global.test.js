const text = "Im brahianf"

test('debe contener string', () => {
    expect(text).toMatch(/brahianf/)
});