package org.generation.exception;

public class Division {
	// Método para dividir
	public static int dividir(int num1, int num2) {
		return num1 / num2; 
	}
	
	public static void main(String [ ] args) {
		/* 
		 * La clase Exception nos permite manejar cuaqluier caso excepcional con nuestro código, es el equivalente a los errores. 
		 * Utiliza la estructura de control try - catch, que permite manejar las excepciones
		 * 		- try : envuelve el código que puede generar una excepción y lo evalua
		 * 		- catch : contiene el código que se ejecuta cuando se lanza la excepcion 
		 * 
		 * sintaxis: 
		 * 		try {
		 *			// Código protegido
		 * 		} catch (ExceptionName e){
		 * 			// Bloque de excepción
		 * 		}
		 * 
		 * 		- finally : siempre se ejecuta, y se utiliza para mostrar un mnesaje en caso de ser invocado. Podemos prescindir de finally. 
		 */
		
		try {
			int resultado = dividir(10,0);
			System.out.println("El resultado de la división es " + resultado);
		} catch (ArithmeticException a){
			//System.out.print("\u001B[31m"); // Código de escape ANSI para color rojo
			System.out.println("\u001B[31mError: no puedes dividir entre 0"); // tambien se puede poner sobre el String
		} finally {
			//System.out.print("\u001B[32m"); // Código de escape ANSI para color rojo
			System.out.println("\u001B[32mPrograma finalizado");
		}
	}
}
