package org.generation.persona;

public class Persona {
	// Crear un objeto Persona con los atributos: nombre, apellido, email, edad
	
	// Declaramos atributos
	private String nombre;
	private String apellido;
	private String email;
	private int edad;
	
	// constructor
	public Persona(String nombre, String apellido, String email, int edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.edad = edad;
	}
// Declaramos los métodos getters y setters
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}
	
	   // Método de validación de email
    public boolean validarEmail() {
    	// Declaramos expresion regular para validar el formato del email
    	String regex = "^[a-zA-Z0-9_-]+(?:\\.[a-zA-Z0-9_-]+)*@(?:gmail\\.com)$";
    	return email.matches(regex);
    	/*if (email.matches(regex)) {
    		System.out.println("Email válido");
    	} else System.out.println("Email no válido");*/
    }
	
}
