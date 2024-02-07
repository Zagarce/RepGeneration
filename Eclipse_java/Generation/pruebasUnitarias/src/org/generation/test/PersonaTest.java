package org.generation.test;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.generation.persona.Persona;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class PersonaTest {
	/* Requerimientos
	 * 1. Instanciar objetos con los parámetros establecidos en el constructor
	 * 2. Crear métodos para probar los parámetros (atributos) de los objetos instanciados (getters) 
	 * 3. Crear un método de validacion de email, donde el email debe cumplir con la condicion de dominio @gmail.com ... si cumple con la condicion, el test se evalua corrector 
	 */
	Persona personaValida = new Persona("Pablo", "Marmol", "pablo.marmol@gmail.com", 35);
	
	Persona personaNoValida = new Persona("Pablo", "Marmol", "pablo_marmol@hotmail.com", 35);
	
	@Test
	public void validarEmail() {
		assertTrue(personaNoValida.validarEmail());

	}

}