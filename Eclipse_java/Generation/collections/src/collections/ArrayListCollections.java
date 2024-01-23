package collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {

//******** Arrays ********//
		String[] names = {"Jonathan", "David", "Braulio", "Lizbeth", "Arturo", "Martin", "Lucero"};
		// Si imprimimos solo print(names) nos da el identificador del array
		//Imprimimos el contenido del array usando print(Array.toString(nombreArray))
		System.out.println(Arrays.toString(names));		
		
		int[] edades = {12 ,3 ,6, 7, 89, 26, 54};
		System.out.println(Arrays.toString(edades));	
		
		// Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		
		int edad1 = edades[5];
		System.out.println("La edad de " + name1 + "es de " + edad1 + " años");
		
		// Obtener la longitud del array
		int longitudNames = names.length;
		System.out.println("Names tiene " + longitudNames + " elementos");
		
		// Obtener el último elemento
		// String ultimoElemento = names[longitudNames -1];
		
		String ultimoElemento = names[names.length-1];
		System.out.println("El último elemento del Array names es " + ultimoElemento);
		
		// Mostrar cada elemento utilizando forEach
		for(String name : names) { // la primera variable itera sobre el array
			System.out.println(name);
		}
		
		for(int i = 0; i< names.length; i++) {
			System.out.println(names[i] + " " + edades[i]);
		}
		
//******** ArrayList ********//
		// ArrayList es un array que puede cambiar de tamaño. Es la clase de Java que representa la estructura de datos de Arrays. Permite elementos duplicados y recibe varios métodos para su manipulación.
		
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<Integer>();
		ArrayList<Character> characters = new ArrayList<Character>();
		
		// Agregar elementos a un array
		films.add("");
		films.add("Inception");
		films.add("Se7en");
		films.add("The Shinning");
		films.add("Mr. Nobody");
		films.add("Pulp Fiction");
		
		//Con ArrayList no es necesario convertirlos a String para imprimir el contenido
		System.out.println(films);
		
		// Obtener un elemento: name.get(index);
		String film1 = films.get(1);
		System.out.println("La primer película es " + film1);
		
		// Modificar un elemento: name.set(index, newValue)
		films.set(3, "Memento");
		String filmsGet = films.get(3);
		System.out.println(filmsGet);
		
		// conocer el tamaño del ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("Films tiene " + sizeFilms + " elementos");
		
		//Agregar un elemento y después eliminarlo: name.remove(index);
		films.add("The Fountain");
		System.out.println(films);
		films.remove(sizeFilms); // se elimina el ultimo elemento del array
		System.out.println(films);
		
		// Mostrando los elementos del Array en Lista
		System.out.println("\n**** Films en lista **** ");
		for(String film : films ) {
			System.out.println(film);
		}
		
		matricula.add(25253);
		System.out.println(matricula);
		
		characters.add('A');
		System.out.println(characters);

	}

}
