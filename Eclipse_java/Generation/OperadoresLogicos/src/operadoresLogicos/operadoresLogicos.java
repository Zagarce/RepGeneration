package operadoresLogicos;

public class operadoresLogicos {
	
	public static void main(String[] args) {
		
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		// && and
		
		int anios = 5; 
		boolean esInfante = true;
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);
		
		
		String cliente = "Cliente123";
		String credenciales = "fertakisfuego123";
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("fertakisfuego123");
		
		System.out.println("Las credenciales sí son válidas " + credencialCorrecta);
		
		// || or
		
		double costoPasaje = 380.5; 
		int edad = 58;
		boolean credenInapam = false;
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("¿Tiene descuento? " + descuentoAdultoMayor);
		
		
		// ! not
		
		boolean disponibles = true;
		boolean asientosConDescuento = !disponibles;
		
		System.out.println("Tenemos asientos con descuento: " + asientosConDescuento);

		// EJERCICIO
		 	
	//Variables
	int asientos = 50;
	boolean estudiante = true;
	boolean adultoMayor = false;
	double golosinas = 25.5;
	
	
	
	
				 
	}

}
