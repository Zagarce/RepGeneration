package org.generation.employee.manager;
import org.generation.employee.Employee;


/*
 * La clase manager sirve como subclase (clase hija), por tanto debe extender (heredar) desde la superclase (clase Employee)para poder acceder a los atributos y métpdps de la superclase
 *  
 */
public class Manager extends Employee {
	// 1. Atributos
	private int antiguedad;
	private double incremento;

	// 2. Constructor (lo traemos desde source y se agregan los nuevos atributos de esta clase)
	  //NOTA: No podemos definir el incremento, porque no conocemos cuál es el incremento de cada objeto, es decir, cada objeto tendrá su incremento con base en un método llamado calcularIncremento();
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad) {
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
		//this.incremento = incremento , double incremento; 
	}
	
	// 3. Getterse y Setters
		public int getAntiguedad() {
			return antiguedad;
		}

		public void setAntiguedad(int antiguedad) {
			this.antiguedad = antiguedad;
		}

		public double getIncremento() {
			return incremento;
		}

		public void setIncremento(double incremento) {
			this.incremento = incremento;
		}

		public double getSalarioBase() {
			return salarioBase;
		}

		public void setSalarioBase(double salarioBase) {
			this.salarioBase = salarioBase;
		}
	
	// 4. Método del usuario
	public void organizarReunion() {
		System.out.println("El manager " + this.getNombreCompleto() + " conovca a una reunión.");
	}
	
		// Inovcar el método de la superclase que guarda el salario base de cualqueir Employee
	double salarioBase = super.getSalario();
	
	
	// Overriding (anulación de métodos)
	/*
	 * En la empresa los Managers reciben un incremento de $1000 sobre el salario base al cumplir su primer año de antiguedad
	 * Después de recibir su primer incremento, cada año recibe un incremento de $500
	 * 
	 * Verificamos con un método la antigüedad. Si es mayor o igual que 1, es true; si no, es falsa.
	 * Creamos método para verificar la antigüedad y calcylar el incremento a recibir 
	 */
	
	public void calcularIncremento() {
		if (this.antiguedad > 0) {
			// Operación matemática para determinar el incremento con base en la antiguedad
			double incrementoTotal = 1000 + (this.antiguedad -1)*500;
			this.setIncremento(incrementoTotal);
			
		} else {
			this.setIncremento(0);
			System.out.println("No hay incremento");
		}
			
	}
	
	// Método para calcular el salario con incremento (siempre que se cumpla la condición)

	public void calcularSalario() {
		calcularIncremento();
		double salarioManager = salarioBase + this.getIncremento(); // this.incremento
		System.out.println("El salario del Manager " + this.getNombreCompleto() + " es de $" + salarioManager);
	}
	
	// 5. toString . Para generar el toString y mandar a llamar los atributos de la superclase, debo seleccionar los getters de los atributos heredades. Despúes, puedo modoficar el return segun mi conveniencia. 

	@Override
	public String toString() {
		return "Manager [antiguedad=" + antiguedad + ", incremento=" + incremento + ", NombreCompleto()="
				+ getNombreCompleto() + ", Id()=" + getId() + ", Salario()=" + getSalario() + ", Puesto()="
				+ getPuesto() + "]";
	}
	
}