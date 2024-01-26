package org.generation.employee;

import org.generation.employee.manager.Manager;

public class EmployeeMain {
	public static void main(String[] args) {
		
		// Instanciamos objetos de la clase Employee (clase nombreObjeto = new clase(propiedades del Constructor))
		Employee Rocio = new Employee("Rocio Hernández", 42013, 12000d ,"Desarrollador Frontend");
		Employee Rene = new Employee("René Gómez", 97565, 15499d , "Desarrollador Backend");
		Employee Diego = new Employee("Diego González", 0054, 25120.52d , "Desarrollador móvil");
		Manager Jorge = new Manager("Jorge Díaz", 0001, 30254d, "Gerente", 15);
	
		Rocio.trabajar();
		Rene.calcularSalario();
		Diego.capacitarse();
		Rene.infoGeneral();
		
		
	
	
	
	}
}
