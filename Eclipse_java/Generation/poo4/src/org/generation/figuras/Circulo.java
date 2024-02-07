package org.generation.figuras;

/************Clase Circulo ***********/
public class Circulo extends Figura {
	private double radio;

	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
	
	//Instanciando un objeto de tipo Circulo
			public static void main(String[] args) {
				Circulo circulo = new Circulo(5);
				System.out.println("El área del rectángulo es " + circulo.calcularArea() + " metros cuadrados");
				
				circulo.infoFigura();
			}
}