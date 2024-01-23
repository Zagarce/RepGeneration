package letras;

public class LetrasMain {
	public static void main(String[] args) {
		
		// Instanciar objetos (Letras y Contador)
		Letras letras = new Letras(); // Nos permite acceder a las funciones creadas en la clase Letras
		
		letras.mostrarMensaje("Escribe un texto y te mostrará el número de vocales, consonantes, símbolos y números");
		String texto = letras.leerEntrada(); // Guardamos el texto introducido por el usuario en la variable palabra 
		
		// Invocar los métodos que me permiten contar los caracteres 
		Contador contador = new Contador(); // Nos permite acceder a las funciones creadas en la clase Contador
		
		int totalVocales = contador.contarVocales(texto);
		System.out.println("Hay "+ totalVocales + " vocales");
		
		int totalConsonantes = contador.contarConsonantes(texto);
		System.out.println("Hay "+ totalConsonantes + " consonantes");
		
		int totalNumeros = contador.contarNumeros(texto);
		System.out.println("Hay "+ totalNumeros + " numeros");
		
		
		int totalSimbolos = contador.contarSimbolos(texto);
		System.out.println("Hay "+ totalSimbolos + " simbolos");
		
		int totalCaracteres = contador.totalCaracteres(texto);
		System.out.println("Hay un total de "+ totalCaracteres + " caracteres");
		
		char car = 29;
		System.out.println(car);
		
		
	}
}
