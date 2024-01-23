package letras;

/* 
 * Contador: métodos para contar vocales, consonantes, número y caracteres
 * 
 * Necesitamos establecer dos grupos de métodos:
 * 		Grupo 1: métodos booleanos para determinar si corresponde o no
 * 		Grupo 2: métodos que van a devolver el conteo de dichos caracteres
 * 
 */
public class Contador {

	// Grupo 1
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U');
	} 
	public boolean esNumero(char caracter) {
		//casting para utilizar la tabla ASCII (48-57)
		short codigoAscii = (short)caracter;
		return codigoAscii > 47 && codigoAscii < 59;
	} 
	public boolean esConsonante(char caracter) {
		//casting para utilizar la tabla ASCII (65-90 y 97-122)
		short codigoAscii = (short)caracter;
		return (codigoAscii > 64 && codigoAscii < 91) || (codigoAscii > 96 && codigoAscii < 123) && !esVocal(caracter);
	} 
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter) || esConsonante(caracter));
	}

	// Grupo 2
	
	//Método para contar vocales
	public int contarVocales(String palabra) {
		int vocales = 0;
		for(char caracter : palabra.toCharArray() ) { // Se convierte el String palabra en un arreglo de caracteres para que 'caracter' pueda iterar sobre el mismo tipo de variable
			if(esVocal(caracter)) {
				vocales++; // si esVocal es true, incrementa 'vocales' en 1
			}
		}
		return vocales;
	}
	
	//Método para contar números
	public int contarNumeros(String palabra) {
		int numeros = 0;
		for(char caracter : palabra.toCharArray() ) {
			if(esNumero(caracter)) {
				numeros++; // si esVocal es true, incrementa 'numeros' en 1
			}
		}
		return numeros;
	}
	
	//Método para contar consonantes
	public int contarConsonantes(String palabra) {
		int consonantes = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esConsonante(caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	
	//Método para contar símbolos
	public int contarSimbolos(String palabra) {
		int simbolos = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esSimbolo(caracter)) {
				simbolos++;
			}
		}
		return simbolos;
	}
	
	// Método para contar total de caracteres
	public int totalCaracteres(String palabra) {
		return palabra.toCharArray().length;
	}
	

}
