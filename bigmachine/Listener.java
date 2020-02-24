package bigmachine;

public class Listener implements IListener {

	String name ;
	
	
	
	public String getName() {
		return name;
	}

    

	public void setName(String name) {
		this.name = name;
	}



	@Override
	public void run() {
		System.out.println(" listner triggered " + this.name);
		
	}

}
