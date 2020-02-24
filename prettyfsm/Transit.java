package fsm;

public class Transit extends Path{
	String evt;

	public Transit() {}
	
	public Transit(String name) {
		super(name);
		
	}
	public String getEvt() {
		return evt;
	}
	public void setEvt(String evt) {
		this.evt = evt;
	}
	
	public void trigger() {
		System.out.println("before: " + this.from.getName());
		System.out.println("trigger on : " + this.evt);
		System.out.println("after: " + this.to.getName());
	}
	
	@Override
	public String toString() {
		StringBuilder  sb = new StringBuilder();
		sb.append("Path name: " +name);
		sb.append(" from: ");
		
		sb.append(from.getName());
		
		sb.append(" to: ");
		
		sb.append(to.getName());
		
		sb.append(" trigger on :" + evt);
		
		return sb.toString();
	}
}
