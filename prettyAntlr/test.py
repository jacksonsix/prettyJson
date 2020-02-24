import sys
from antlr4 import *
from JcksnLexer import JcksnLexer
from JcksnParser import JcksnParser

from Pretty import Pretty
import pdb



def main(argv):
    input = FileStream(argv[1])
    lexer = JcksnLexer(input)
    stream = CommonTokenStream(lexer)
    parser = JcksnParser(stream)
    tree = parser.exp()
    print(tree.toStringTree(recog=parser))

    prettyer = Pretty()
    walker = ParseTreeWalker()
    #breakpoint()
    walker.walk(prettyer,tree)
    
if __name__ == '__main__':
    main(sys.argv)
