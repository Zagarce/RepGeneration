package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	// Atributos
	public String lenguajeProgramacion;
	
	// Constructor (traidos desde superclass Employee)
	public Developer(String nombreCompleto, int id, double salario, String puesto, String lenguajeProgramacion) {
		super(nombreCompleto, id, salario, puesto);
		this.lenguajeProgramacion = lenguajeProgramacion;
	}
	public String getLenguajeProgramacion() {
		return lenguajeProgramacion;
	}
	
	public void setLenguajeProgramacion(String lenguajeProgramacion) {
		this.lenguajeProgramacion = lenguajeProgramacion;	
	}
	
	public void codear() {
		System.out.println("El programador " + this.getNombreCompleto() + " utiliza " + this.lenguajeProgramacion);
	}
	
	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", Nombre Completo=" + getNombreCompleto() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", Lenguaje de Programacion=" + lenguajeProgramacion + "]";
	}
	
}
