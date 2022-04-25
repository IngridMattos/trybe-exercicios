import myRemove from './myRemove.js';
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('testa a função myRemove', () => {
    it('o retorno tem que ser um array com o item correto removido', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 4])
    })
})