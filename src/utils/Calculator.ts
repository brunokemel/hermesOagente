/**
 * @class Calculator
 * @description Uma classe simples de calculadora que demonstra princípios de Programação Orientada a Objetos (POO).
 *              Encapsula operações matemáticas básicas e mantém o estado interno.
 * @remarks Esta classe segue os pilares da POO: Encapsulamento, Abstração, Herança e Polimorfismo.
 *          Embora este exemplo seja simples, ilustra como estruturar código OOP em TypeScript.
 */
export class Calculator {
  /**
   * @private
   * @type {number}
   * @description Mantém o valor atual da calculadora.
   */
  private currentValue: number;

  /**
   * @constructor
   * @param {number} initialValue - O valor inicial da calculadora. Padrão é 0.
   */
  constructor(initialValue: number = 0) {
    this.currentValue = initialValue;
  }

  /**
   * @public
   * @method add
   * @description Adiciona um valor ao valor atual.
   * @param {number} value - O valor a ser adicionado.
   * @returns {number} O novo valor atual após a adição.
   * @example
   * const calc = new Calculator(5);
   * calc.add(3); // retorna 8
   */
  public add(value: number): number {
    this.currentValue += value;
    return this.currentValue;
  }

  /**
   * @public
   * @method subtract
   * @description Subtrai um valor do valor atual.
   * @param {number} value - O valor a ser subtraído.
   * @returns {number} O novo valor atual após a subtração.
   */
  public subtract(value: number): number {
    this.currentValue -= value;
    return this.currentValue;
  }

  /**
   * @public
   * @method multiply
   * @description Multiplica o valor atual por um fator.
   * @param {number} multiplier - O fator de multiplicação.
   * @returns {number} O novo valor atual após a multiplicação.
   */
  public multiply(multiplier: number): number {
    this.currentValue *= multiplier;
    return this.currentValue;
  }

  /**
   * @public
   * @method divide
   * @description Divide o valor atual por um divisor.
   * @throws {Error} Se o divisor for zero.
   * @param {number} divisor - O divisor.
   * @returns {number} O novo valor atual após a divisão.
   */
  public divide(divisor: number): number {
    if (divisor === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    this.currentValue /= divisor;
    return this.currentValue;
  }

  /**
   * @public
   * @method getValue
   * @description Retorna o valor atual da calculadora.
   * @returns {number} O valor atual.
   */
  public getValue(): number {
    return this.currentValue;
  }

  /**
   * @public
   * @method reset
   * @description Redefine o valor atual para zero ou para um valor especificado.
   * @param {number} [value=0] - O valor para redefinir. Padrão é 0.
   * @returns {void}
   */
  public reset(value: number = 0): void {
    this.currentValue = value;
  }
}

/**
 * @example
 * // Uso da classe Calculator
 * import { Calculator } from './utils/Calculator';
 *
 * const calc = new Calculator(10);
 * console.log(calc.getValue()); // 10
 * calc.add(5);
 * console.log(calc.getValue()); // 15
 * calc.multiply(2);
 * console.log(calc.getValue()); // 30
 * calc.divide(4);
 * console.log(calc.getValue()); // 7.5
 */
