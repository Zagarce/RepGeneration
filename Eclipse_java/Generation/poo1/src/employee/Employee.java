package employee;

/*
 * La estructura básica para crear objetos es la siguiente:
 * 		1. Atributos o Propiedades
 * 		2. Método Constructor (1 - n métodos)
 * 		3. Métodos del objeto (comportamiento)
 * 		4. Métodos Getters y Setters
 * 		5. Método toString
 */

public class Employee {
	
	// 1. Definimos atributos o propiedades
	String nombre;
	String apellido;
	String puesto;
	int id;
	double salario;
	
	// 2. Método constructor. Tiene el mismo nombre que la clase, no returna nada, recibe parámetros (atributos) y los asigna a variables del constructor (this)
	Employee(String nombre, String apellido, String puesto,int id, double salario){
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.puesto = puesto;
		this.salario=salario;
	}
	
	// 3. Métodos de comportamiento
	
	void trabajar() {
		System.out.println("Estoy trabajando");
	}
	
	void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de $" + this.salario);
	}
	
	void capacitarse() {
		System.out.println("El trabajador del puesto " + this.puesto + " se capacita");		
	}
	
	void infoGeneral() {
		System.out.println("Id: " + this.id + ", Nombre: " + this.nombre + ", Apellido: " + this.apellido);		
	}
	
	// 4. Getters y Setters. Son métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. Los getters nos permiten obtener la info y los setters nos permiten enviar la info.
	
	/* 
	 * estrcutura de getter
	 * 		public tipoDato getNombreVariable(){
	 * 			return nombreVariable
	 * 		} 
	 * por ejemplo
	 * 		public String getNombre(){
	 * 			return nombre;
	 * 		}
	 * Estructura de Setter:
	 * 		public void setNombreVariable(variable){
	 * 			this.variable=variable
	 * 		}
	 * por ejemplo
	 * 		public void setNombre(String nombre){
	 * 			this.nombre = nombre;
	 * 		}
	 * 
	 * Podemos inicializar Getters y Setter dando click derecho > Source > Generate Getters y Setters > Select All > Generate
	 */

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

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	// 5. Método toString. Es un override que se refiere a la cpacidad de proprocionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato String. 
	// Podemos inicializar toString con click derecho > source > Generato toString > Fields > Generate
	@Override
	public String toString() {
		return "Employee ["
				+ "nombre=" + nombre + 
				", apellido=" + apellido + 
				", puesto=" + puesto + 
				", id=" + id + 
				", salario=" + salario + 
				"]";
	}

	
	
	
	
	
	
	

}
