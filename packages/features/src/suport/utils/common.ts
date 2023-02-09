
import * as uuid from 'uuid';

export default class CommonFunctions {
  /**
   * check
   */
  public check() {
    return {
      isEmpty: (obj: any) => Object.keys(obj).length === 0,
      isGreaterThat: (A: any, B: any) => A > B,
      isLasserThat: (A: any, B: any) => A < B,
      isGreaterThatOrEqualTo: (A: any, B: any) => A >= B,
      isLasserThatOrEqualTo: (A: any, B: any) => A <= B,
      isObject: (object: any) => typeof object === 'object' && object !== null,
      isNull: (object: any) => object === null,
      equalTo: (objetoA: any, objetoB: any) => {
        //Busca as chaves do objetoA e objetoB
        //utilizando o "let" o escopo da variável é limitado para o bloco.
        //Object.keys retornará um array com todas as chaves do objeto.
        const aChaves = Object.keys(objetoA),
          bChaves = Object.keys(objetoB);

        //Compara os tamanhos, se forem diferentes retorna falso pois
        //o numero de propriedades é diferente, logo os objetos são diferentes
        if (aChaves.length != bChaves.length) {
          return false;
        }

        //Verifico se existe algum elemento com valor diferente nos objetos.
        //o array.some executa uma função(passada por parâmetro) para cada valor
        //do array. Essa função deve executar um teste, se para algum dos valores
        //o teste é verdadeiro, a execução é interrompida e true é retornado.
        //Do contrário, se o teste nunca for verdadeiro ele retornará false
        //após executar o teste para todos valores do array.
        //Estou basicamente verficando se existe diferença entre dois valores do objeto.

        const saoDiferentes = aChaves.some((chave) => {
          return objetoA[chave] !== objetoB[chave];
        });

        //como saoDiferentes contém true caso os objetos sejam diferentes eu
        //simplesmente nego esse valor para retornar que os objetos são iguais (ou não).
        return !saoDiferentes;
      }
    }
  }
  /**
   * clean
   */
  public clean() {
    return {
      onlyNumbers: (str: string) => str.replace(/[^0-9]/g, ''),
      onlyText: (str: string) => str.replace(/^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/, '')
    }
  }

  /**
   * makeID
   */
  public makeID() {
    return uuid.v4()
  }

  /**
   * format 
   */
  public Format() {
    return {
      currency: (
        value: number,
        locale = 'pt-BR',
        currency = 'BRL',
      ) => {

        const formattedCurrency = new Intl.NumberFormat(locale, {
          style: 'currency',
          currency,
        }).format(value);

        return formattedCurrency
      }
    }
  }
}



