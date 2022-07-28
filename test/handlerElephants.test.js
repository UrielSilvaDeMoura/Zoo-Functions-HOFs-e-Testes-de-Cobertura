const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se retorna quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Verifica se retorna `undefined` se a função não receber argumentos', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se retorna string passando por argumento um objeto vazio', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna null passando uma string que não comtempla nada', () => {
    expect(handlerElephants('Elefante')).toBeNull();
  });
});
