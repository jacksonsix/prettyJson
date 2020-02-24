package fsm;

public class Path implements IPath{
	String name;
	INode from;
	INode to;

	
	public Path(String name) {
		this.name = name;
	}
	
	public Path() {}
	
	@Override
	public String getName() {
		return name;
	}
	@Override
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public INode getFrom() {
		return from;
	}
	@Override
	public void setFrom(INode from) {
		this.from = from;
	}
	@Override
	public INode getTo() {
		return to;
	}
	@Override
	public void setTo(INode to) {
		this.to = to;
	}

	

	
}
