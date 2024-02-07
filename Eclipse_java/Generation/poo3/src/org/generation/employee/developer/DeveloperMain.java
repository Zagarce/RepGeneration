package org.generation.employee.developer;

public class DeveloperMain {
	public static void main(String[] args) {
		Developer Baruch = new Developer("Baruch Moreno", 410852, 18564, "Programador", "Java");
		System.out.println(Baruch);
		
		Baruch.calcularSalario(); // Método de superclase
		Baruch.codear(); // Método de la subclase
	}
}
