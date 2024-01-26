package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {
	public static void main(String[] args) {
		// Podemos iterar sobre una colección de 3 maneras
		 // 1. Iteración mediante ciclo for-each
		System.out.println("*********Primer método*********");
		List<String> nombres = new ArrayList<String>(); // La interface List<> nos permite alternar entre las clases ArrayList o  LinkedList
		
		nombres.addAll(Arrays.asList("Braulio", "Fernanda", "Rodrigo", "Rubén", "Marco", "Rey"));
		int i = 1;
		for (String nombre : nombres) {
			System.out.println(i++ + ". " + nombre);
		}
		
		// 2. Iterar mediante Iterator 
		System.out.println("*********Iterator*********");
		List<String> apellidos = new ArrayList<String>();
		
		apellidos.addAll(Arrays.asList("Aleman","García","Martinez","Cardoso","Razo","Ceja"));
		
		// Utilizar un nuevi Iterador y le vamos a psar el método iterator() a nuestro ArrayList
		Iterator<String> iterador = apellidos.iterator();
		
		// Utilizando while, devuelve veradadero si la iteración tiene más elementos, si no, se termina el ciclo
		
		int j=1;
		while(iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(j++ + ". " + elemento);
		}
		
		// 3. Mediante forEach, que toma una expersión Java Lambda como parámetro
		System.out.println("*********Lambda*********");

		List<String> animales = new ArrayList<String>();
		
		animales.addAll(Arrays.asList("Cuyo","Nahual","Tlacuache","Ajolote","Tepezcuintle","Vaquita marina"));
	
		animales.forEach((animal) -> {
			System.out.println(animal);
		});
	}
}
