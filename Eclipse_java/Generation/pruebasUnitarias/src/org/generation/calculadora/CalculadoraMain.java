package org.generation.calculadora;

public class CalculadoraMain {
	public static void main(String[] args) {
		Calculadora calculadora = new Calculadora();
		
		
		System.out.println(calculadora.sumar(3, 5));
		System.out.println(calculadora.restar(3, 5));
		System.out.println(calculadora.multiplicar(3, 5));
		System.out.println(calculadora.dividir(31416, 3));
	}
}
