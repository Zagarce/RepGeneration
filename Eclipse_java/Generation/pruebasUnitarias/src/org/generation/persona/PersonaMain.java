package org.generation.persona;

public class PersonaMain {
	public static void main(String[] args) {
		// Instanciar objetos 
		Persona Nemo = new Persona("Nemo", "Marlinson", "nemo.12_pez@gmail.com", 12);
		
		// probamos los atributos del objeto 
		
		System.out.println(Nemo.getNombre());
		System.out.println(Nemo.getApellido());
		System.out.println(Nemo.getEmail());
		System.out.println(Nemo.getEdad());
		
		Nemo.validarEmail();
		
		
	}
}
