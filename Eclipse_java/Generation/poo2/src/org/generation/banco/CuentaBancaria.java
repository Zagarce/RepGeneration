package org.generation.banco;

/*
 * En esta clase se definen los métodos para disparar las excepciones, es decir. el try-catch
 * Se definen los métodos como depositar dinero, retirar dinero. 
 * 	Requerimientos: 
 * 		- Trabajar bajo POO
 * 		- Encapsular (modificadores, getters y setters) 
 * 		- Crear variables y métodos par ainstanciar objetos
 */
public class CuentaBancaria {
	//Atributos
	private double saldo;
	private int idCuenta; 

	// Constructor que recibe solamente el atribtuo numero
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta ;
	}
	
	// Método para depositar dineros
	public void depositar (double monto) {
		saldo += monto;
	}
	
	/* Método para retirar dinero
	 Verificar si el monto a retirar es menor o igual que el saldo actual
	 * 		- true: Se puede retirar el monto solicitado
	 * 		- false: No se puede retirar y calculamos cuanto dinero falta para completar la operacion 
	 */
	public void retirar(double monto) throws FondosInsuficientesException {
		if(monto <= saldo) {
			saldo -= monto;
			//System.out.println("Saldo restante: " + saldo);
		} else {
			double faltante = monto - saldo;
			//System.out.println("Saldo insuficiente: " + faltante);
			// Crear la instancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parámetro correspondiente a la variable que disparará la excepción 
			throw new FondosInsuficientesException(faltante); // Debemos instanciar el método de manera local pero no lo encuentra, por lo que necesitamos heredarlo como parte del método con la palabra reservada throws y el nombre de la excepción 
		}
	}
	
	// Getters y Setters 
	public double getSaldo() {
		return saldo;
	}
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	public int getIdCuenta() {
		return idCuenta;
	}
	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
	
	
}
