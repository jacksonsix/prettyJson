#pretty json

#event listener style vs  switch case style vs table style

def inc(ch,lv,result):
    result.append(str(lv)+'->'+ch)
    lv +=  1
    return lv

def dec(ch,lv,result):
    lv -= 1
    result.append(str(lv)+'->'+ch)
    return lv

def outseg(strg,res,lv):
    seg= strg.split(',')
    for e in seg:
        res.append(str(lv) +'->'+ e)

        
def level(strg,lv,mydict,result):
    sub=''
    for ch in strg:
        if ch =='{':
            outseg(sub,result,lv)
            sub=''
            lv = mydict["{"]('{',lv,result)
        elif ch == '}':
            outseg(sub,result,lv)
            sub=''
            lv = mydict["}"]('}',lv,result)
        elif ch == '[':
            outseg(sub,result,lv)
            sub=''
            lv = mydict["["]('[',lv,result)
        elif ch == ']':
            outseg(sub,result,lv)
            sub=''
            lv = mydict["]"](']',lv,result)    
        else:
            sub +=ch
            
def gspace(num):
    i = int(num)
    s=''
    while i >0:
        s +='  '
        i -=1
    return s

def user():
    result=[]
    curlevel=0
    mydict={}
    mydict["{"]= inc
    mydict["}"]= dec
    mydict["["]= inc
    mydict["]"]= dec
    f=open('C:\\Users\\jliang\\Downloads\\a.json')
    sample = f.read()

    level(sample,0,mydict,result)

    for r in result:
        line= r.split('->')
        print(gspace(line[0]) + line[1])
        

user()    




