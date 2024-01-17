package loops;

public class DoWhile {
	
	public static void main(String[] args) {
		/* ciclo Do While
		 * Evalúa la expresión en la parte inferior del ciclo
		 * Las declaraciones dentro del bloque do siempre se ejecutan al menos una vez
		 */
		
		//
		
		int x = 10;
		do {
			if (x % 2 == 0) {
				x = x/2;
			} else {
				x = 3*x+1;
			} System.out.println(x);
		} while (x>1);
		
		
	}

}
