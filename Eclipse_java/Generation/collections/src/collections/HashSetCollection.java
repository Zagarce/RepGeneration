package collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Ornitorrinco");
		animals.add("Zebra");
		animals.add("Ornitorrinco");
		animals.add("Mapache");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		
		// Imprimir el HashSet
		System.out.println(animals);
		
		// Conocer si un elemento se encuentra dentro del Set: contains();
		System.out.println(animals.contains("Capibara"));
		
		//Eliminar un elemento: remove();
		animals.remove("Cebra"); // Elimino
		System.out.println(animals); // Imprimo el Set sin el elemento eliminado
		
		//Agregando elementos en una sola línea		
		animals.addAll(Arrays.asList("Buho", "Caballo", "Perro", "Gato", "Ornitorrinco", "Zebra", "Ornitorrinco", "Mapache", "Capibara","Capibara","Capibara","Capibara","Capibara","Capibara"));
		

	}

}
