package hilos;

public class Prueba1 extends Thread {
	private String numeroPedido;
	
	public Prueba1(String numeroPedido) {
		this.numeroPedido = numeroPedido;
	}
	
	@Override
	public void run() {
		
		System.out.println("Pedido procesado " + numeroPedido);
	}
}
