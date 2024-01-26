package org.generation.banco;

// En esta clase se definen los métoos que arrojan Excepciones, siempre que en la clase Cajero se dispare dicha excepcion
/*
 * Requerimientos: 
 * 		1. Trabajar bajo el paradigma POO
 * 		2. Indicar que la clase en es una Exception
 * 		3. Crear variables y métodos para instanciar objetos
 * 		4. Encapsular (modificadores, getters y setters) 
 */
public class FondosInsuficientesException extends Exception {
	private static final long serialVersionUID =1L; 
	// Atributos 
	private double monto;
	
	// Constructor
	public FondosInsuficientesException (double monto) {
		this.monto = monto;
	}
	
	//Getters y Setters
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}

}
