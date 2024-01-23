package employee;

public class EmployeeMain {
	public static void main(String[]args) {
		// Instanciar los objetos
		
		Employee Cesar = new Employee("Cesar", "Zaldivar", "Desarrollador", 666, 112451.99);
		Employee Abigail = new Employee("Abigail", "Martinez", "Desarrollador frontend", 626, 213339.99);
		Employee Arturo = new Employee("Arturo", "Avila", "Scrum Master", 81, 152724.99);
		
		System.out.println(Cesar);
		System.out.println(Abigail);
		System.out.println(Arturo);
		
		// Aplicando étodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
		Cesar.infoGeneral();
		Arturo.calcularSalario();
		Abigail.capacitarse();
		
		// Utilizar información espec´ficia de cada objeto mediante sus propiedades
			// Usando getter
		System.out.println(Cesar.getNombre() + " " + Cesar.getApellido() + " ocupa el puesto de " + Cesar.getPuesto() );
			// Accediendo a la propiedad del objeto
		System.out.println(Abigail.puesto + " gana $" + Abigail.salario);
		
		
		// Actualizamos información mediante Setter
		Arturo.setSalario(53215);
		Arturo.calcularSalario();
		
	}
}
