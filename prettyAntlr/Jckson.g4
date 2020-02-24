grammar Jcksn;

exp : '{' member  '}';

member : pair  (',' pair)* ;

pair : name ':' value
      | name ':' array
      |
	  ;

name : '"' TEXT '"';

value : '"' TEXT '"'
      | TEXT
	  ;

array : '[' exp ']';

TEXT   : ~[,{}\n\r":\u005B\u005D]+ ;


WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines, \r (Windows)

//STRING: '"' .*? '"';
//STRING: '"' ~["]* '"';
