package controlFlujo;
import java.util.Scanner;

public class controlFlujo {
	
	public static void main(String[] args) {
		
/*		String viaje = "16-01-2024"; // Se declara una variable null para posteriormente reemplazarlo con un nuevo dato
		
		// Validamos si se podrá vijar en cierta fecha
		if (viaje != "16-01-2025") {
			System.out.println("Ya no tenemos fechas disponibles, una disculpa");
			}  else {
				System.out.println("Puede reservar su viaje");
			}
		
		//Validacion de contraseña
		Scanner scanner = new Scanner(System.in);
		
		// Solicitar la primera contraseña
		System.out.print("Ingrese la contraseña: "); 
		String contraseñal = scanner.nextLine();
		
		// Solicitar la segunda contraseña
		System.out.print("Ingrese la contraseña nuevamente: ");
		String contraseña2 = scanner.nextLine();
		
		// Verificar si las contraseñas coinciden
		if (contraseñal.equals(contraseña2)) {
		System.out.println("Las contraseñas coinciden. Acceso permitido.");
		} else {
		System.out.println("Las contraseñas no coinciden. Acceso denegado.");
	
		// Cerrar el scanner
		scanner.close();
		}
	*/
		// switch: para seleccionar comida de la dulceria del cine
		// Seleccion de opciones, variable que almacena dicha opcion 
		Scanner scanner = new Scanner(System.in);
		
		
		
		// Crear un menu 
		System.out.println("Bievenido a la dulceria, ¿qué desea ordenar?\n"+ 
		"1. Palomitas\n" + "2. Refresco\n" + "3. Nachos\n" + "4. Hot Dog\n" + "5. Pagar\n");
		
		int total = 0;
        String OrdenTotal = "";

        while (true) {
            int menu = scanner.nextInt();

            if (menu >= 1 && menu <= 5) {
                switch (menu) {
                    case 1:
                        OrdenTotal += "Palomitas, ";
                        total += 100;
                        break;
                    case 2:
                        OrdenTotal += "Refresco, ";
                        total += 60;
                        break;
                    case 3:
                        OrdenTotal += "Nachos, ";
                        total += 120;
                        break;
                    case 4:
                        OrdenTotal += "Hot-dog, ";
                        total += 80;
                        break;
                    case 5:
                        System.out.println("Usted ha seleccionado pagar su combo");
                        break;
                }

                if (menu == 5) {
                    break;
                }
            } else {
                System.out.println("Por favor, seleccione una opción válida (1-5).");
            }
        }

        System.out.println("Usted ha ordenado: " + OrdenTotal);
        System.out.println("El total a pagar es: $" + total);

        // Close the Scanner to avoid resource leak
        scanner.close();
	}
	 
}
