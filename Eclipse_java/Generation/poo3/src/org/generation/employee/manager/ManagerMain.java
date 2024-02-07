package org.generation.employee.manager;

public class ManagerMain {
	public static void main(String[] args) {
		
		Manager Jorge = new Manager("Jorge Díaz", 0001, 30254d, "Gerente", 3);
		System.out.println(Jorge);
		
		//Método calcular salario base heredado
				double salarioBaseJorge = Jorge.salarioBase;
				
				//Método calcular salario polimórfico
				Jorge.calcularSalario();
				
				System.out.println(Jorge.getSalario());
				
				double salarioJorge = Jorge.getSalario();
				System.out.println("El salario base de " + Jorge.getNombreCompleto() + " con posición de " + Jorge.getPuesto() + " es de $" + salarioBaseJorge + " pero posee una antigüedad de " + Jorge.getAntiguedad() + " años, por lo tanto su salario incrementa a $" + salarioJorge);
				
			}
		}