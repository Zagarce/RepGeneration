package loops;

public class Loops {

		public static void main(String[] args) {
			
			/* El ciclo for nos proporciona una forma compacta de iterar sobre valores 
			 * for (inicialización, condición; contador incremento/decremento) {
			 * bloque de código 
			 * } 
			 */
			
		// for con variable local
			int factorial= 1;
			for (int i=1;i<=10;i++) {
				factorial *= i;
				
				System.out.println(i + "! = " +  factorial);
			} 
			
			for (int numero = 0; numero <= 10; numero++) {
				System.out.println("Numero es igual a " + numero);
			}
			//for con variable global
			int contador;
			for (contador = 1; contador <=5; contador++) {
				System.out.println("La cuenta es " + contador);
			}
			
			
			//Bucles anidados- Bucle dentro de otro bucle.
			//imprimir un triangulo con asteriscos
			int filas = 5;
			for (int i = 1; i <= filas; i++) {
			//bloque de codigo que va iterar con el bucle
				for (int j = 1; j <= i; j++) {
				System.out.print("*");
				} System.out.println();
			}
}

}