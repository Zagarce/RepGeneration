package excercises;

import java.util.ArrayList;
import java.util.Scanner;

/* Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriormente, muestra la lista de los estudiantes agregados. 
 * -- Requerimientos: 
 * 		> Utilizar ArrayList
 * 		> Scanner para interactuar con el usuario
 * 		> Loop (do-while) para solicitar una y otra el nombre de los estudiantes
 * 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, != , switch son posibles opciones)
 * 		> Mostrar lista de estudiantes (forEach) 
 * */

public class SistemaEscolar {
	public static void main(String[] args) {
	/*	//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante;
		estudiantes.add(" ");
		int indexEstudiante;
		
			
		do {
			
			System.out.println("Ingresa el nombre del estudiante. Escirbe 'Salir' para finalizar");
			nombreEstudiante = scanner.nextLine(); // Invocado de manera local dentro del do
			if(!nombreEstudiante.equals("Salir")) {
			estudiantes.add(nombreEstudiante);
			}
		} while(!(nombreEstudiante.equalsIgnoreCase("Salir") )); // Mientras no se escriba 'Salir' el loop se sigue ejecutando !nombreEstudiante.equals("Salir")
		
		// Mostrar lista de estudiantes (for-Each)
		System.out.println("**Lista de estudiantes");
		for(String estudiante : estudiantes) {
			System.out.println(estudiante);
		}
		scanner.close();
		*/
		

		
		
		/* * * * * EJERCICIO * * * * *
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agregar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).
		 */
		
//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante;
		estudiantes.add("");
		
		
		do {
			System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar.");
			nombreEstudiante = scanner.nextLine();
			
			if(!nombreEstudiante.equalsIgnoreCase("Salir")) {
			estudiantes.add(nombreEstudiante);
			}
		} while(!nombreEstudiante.equalsIgnoreCase("Salir"));
		 
	// Mostrar lista de estudiantes (for-Each)
		 System.out.println("\n**Lista de estudiantes");
		
		for(int i = 1; i < estudiantes.size();i++) {
			System.out.println(i +". " + estudiantes.get(i));
		}
		
	// Verificamos si se desea elmiminar un estudiante de la lista			
		String respuesta;
		int indexEstudiante;
		int numeroEstudiantes;
		String respuesta1;
		
		System.out.println("\nSi deseas eliminar algún estudiante de la lista escribe 'si', de lo contrario presiona enter.");
		
		respuesta = scanner.nextLine();
		if(respuesta.equalsIgnoreCase("si")) {
				do {
					System.out.println("\nDigita el número de lista del estudiante que deseas eliminar.");
					System.out.println("\t**Lista de estudiantes");
					numeroEstudiantes = estudiantes.size();
					for(int i = 1; i < numeroEstudiantes; i++) {
						System.out.println(i +". " + estudiantes.get(i));
					}

					indexEstudiante = scanner.nextInt();
					estudiantes.remove(indexEstudiante);
					
					System.out.println("\t**Lista de estudiantes");
					numeroEstudiantes = estudiantes.size();
					for(int i = 1; i < numeroEstudiantes; i++) {
						System.out.println(i +". " + estudiantes.get(i));
					}
					
					System.out.println("\nSi quieres eliminar otro estudiante presiona cualquier letra y enter. Escribe 'Salir' para finalizar.");
					respuesta1 = scanner.next();
					
				} while(!respuesta1.equalsIgnoreCase("salir"));
		}
		
		System.out.println("\nPrograma finalizado");
		scanner.close();	
		
	}
}
