from JcksnListener import JcksnListener
import pdb

class Pretty(JcksnListener):
    def __init__(self):
        self.lvl =0
        self.tname=''
        
    def spaces(self,level):
        st=''
        while(level>0):
            st +=' '
            level -= 1
        return st
    
    def enterExp(self,ctx): 
        print(self.spaces(self.lvl) + "{")
        self.lvl += 1

    def exitExp(self,ctx):
        self.lvl -= 1
        print(self.spaces(self.lvl) + "}")

        
    # Enter a parse tree produced by JcksnParser#array.
    def enterArray(self, ctx):
        self.lvl += 1
        print( self.spaces(self.lvl) + '[')

    # Exit a parse tree produced by JcksnParser#array.
    def exitArray(self, ctx):
        self.lvl -= 1
        print(self.spaces(self.lvl) +']')
    # Enter a parse tree produced by JcksnParser#name.
    def enterName(self, ctx):
        
        self.tname = self.spaces(self.lvl) + ctx.getText() + ':'
        print(self.tname)

    # Exit a parse tree produced by JcksnParser#name.
    def exitName(self, ctx):
        #breakpoint()
        pass

    # Enter a parse tree produced by JcksnParser#value.
    def enterValue(self, ctx):
        #breakpoint()
        print(self.spaces(self.lvl) + ctx.getText())
        self.tname=''

    # Exit a parse tree produced by JcksnParser#value.
    def exitValue(self, ctx):
        pass

    def exitPair(self, ctx):
        #print(ctx.getText())
        pass
