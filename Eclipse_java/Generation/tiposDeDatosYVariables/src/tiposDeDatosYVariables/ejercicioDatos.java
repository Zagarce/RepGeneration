package tiposDeDatosYVariables;

public class ejercicioDatos {

	public static void main(String[] args) {

		System.out.println("Hola, mundo");
		
		byte edad = 127; // Sirve para representar un número entero 8 bits (-128 al 127)
		System.out.println("Edad del participante: "+edad);	
		
		short usuariosNuevos = 32767; // Sirve para representar un número entero 16 bits (-32768 al 32767)
		System.out.println("Número de usuarios: " + usuariosNuevos);
		
		int usuariosTotales = 8752; // Sirve para representar un número entero 32 bits (-2,147,483,648 al 2147483647)
		System.out.println("Usuarios totales: " + usuariosTotales);
		
		long usuariosPremium = 2512; // Sirve para representar un número entero 64 bits (-9,223,372,036,854,775,808 al 9,223,372,036,854,775,807)
		System.out.println("Usuarios Premium: " + usuariosPremium);
		
		// Tipos de datos con números decimales
		float altura = 1.7365465456f; // Sirve para representar un valor númerico de 32 bits con decimales,puede tener un total de 8 caracteres y tiene que llevar una f al final
		System.out.println("Altura del usuario: " + altura);
		
		double peso = 65.7;//Sirve para representar valores numéricos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		System.out.println("Peso del usuario: " + peso);
		
		String nombreUsuario = "César"; // Clase de cadena de texto
		System.out.println("Usuario: " + nombreUsuario);
		
		String costoBoleto = "500"; //Es una clase para tener cadenas de texto
		String zonaBoleto = "52";
		System.out.println("Usuario: " + costoBoleto);
		System.out.println("Seccion: " + zonaBoleto);
		
		char seccion = 'f'; // Almacena un solo caracter
		System.out.println("Zona a la que pertenecen: " + seccion);
		
		boolean clienteFrecuente = true;
		System.out.println("Es un cliente frecuente: " + clienteFrecuente);
	
		
		// Conversión de tipos

		// Casteo a entero
		int pesoDiferente = (int)peso;
		
		// Casteo a entero
		long pesoCambio1 = (long)peso;
		
		System.out.println("double " + peso);
		System.out.println("int " + pesoDiferente);
		System.out.println("long " + pesoCambio1);
		
		int costoCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		
		System.out.println("Zona del usuario segun su boleto " + (costoCambio * zonaCambio));
		
/* 	Operadores aritméticos
		+ suma
		- resta
		* multiplicación
		/ división
		% residuo
		
	Operadores de comparación
		
		== Compara si un operador es igual a otro
		!= compara si es diferente
		<  mayor que 
		>  menor que 
		<= mayor o igual que 
		>= menor o igual que
*/
		
	// Ejercicio: programa para un cine
		
		double precioEntrada = 75.50;
		double precioPalomitas = 89.7;
		double precioBebida = 35.5;
		int capacidadTotal = 500;
		
		int personasDentro = 342; 
		
		if (personasDentro >= capacidadTotal) {
			System.out.println("Lo lamento, ya no hay cupo");
		} else {
			System.out.println("Quedan " + (capacidadTotal - personasDentro) + " lugares disponibles");
		}
		
		double totalEntrada = personasDentro * precioEntrada; 
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida; 
		
		System.out.println("Total de personas: " + personasDentro);
		System.out.println("Total de entradas: " + totalEntrada);
		System.out.println("Total de palomitas: " + totalPalomitas);
		System.out.println("Total de bebidas: " + totalBebidas);
		
	}
}
