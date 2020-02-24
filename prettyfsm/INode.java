package fsm;

import java.util.Set;

public interface INode {
	String getName();

	Set<IPath> getUp();

	void addUp(IPath up);

	Set<IPath> getDown();

	void addDown(IPath down);
}
