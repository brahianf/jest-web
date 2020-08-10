import reducer from '../../reducers'
import ProductMock from '../../__mocks__/ProductMock'

describe('Reducers', () => {
    test('Retornar initial State', () => {
        expect(reducer({} , '')).toEqual({});
        // Retorna un objeto vacio pq si no concide en ningun caso retorna el estado sin modificacion
        // Como el estado es un objeto vacío se debe retornar un objeto vacío
    });
    test('ADD_TO_CART', () => {
        const initialState = {
            cart: []
        };
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload,
        };
        const expected = {
            cart: [
                ProductMock,
            ],
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
});
