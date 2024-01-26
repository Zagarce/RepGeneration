package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[] args) {
		
		Manager Jorge = new Manager("Jorge Díaz", 0001, 30254d, "Gerente", 15);
		System.out.println(Jorge);
		
		// Método calcular salario
		Jorge.getSalarioBase();
		Jorge.calcularIncremento();
		
		double salarioFer = Jorge.getSalario();
		System.out.println("El salario base de " + Jorge.getNombreCompleto() + " con posición de " + Jorge.getPuesto() + " es de $" + salarioBaseFer + " pero posee una antigüedad de " + Jorge.getAntiguedad() + " años, por lo tanto su salario incrementa a " + salarioFer);
	}
}