import _ from 'lodash';

export function somar(valor1, valor2) {
  if (!_.isNumber(valor1) || !_.isNumber(valor2)) {
    throw Error('Os parâmetros informados devem ser númericos')
  }

  return valor1 + valor2;
}
