def funWithAnagrams(text):
    removeFlag = 1
    noAnagramList =[]
    for i in text:
        if(len(noAnagramList)==0):
            noAnagramList.append(i)
        else:
            removeFlag = checkAnagram(i,noAnagramList)
        if(removeFlag==0):
            noAnagramList.append(i)
            removeFlag = 1
    return sorted(noAnagramList)


def checkAnagram(word, AnagramList):
    for i in AnagramList:
        if(sorted(i)==sorted(word)):
            return 1
    return 0

def deviceNamesSystem(devicenames):
    IoT_Dict = {}
    IoT_List = []
    for i in devicenames:
        if i.isdigit():
            continue
        elif i in IoT_Dict:
            IoT_List.append(i+str(IoT_Dict[i]+1))
            IoT_Dict[i]=IoT_Dict[i]+1
        else:
            IoT_Dict[i]=0
            IoT_List.append(i)
        #print(IoT_Dict)
        #print(IoT_List)
    return(IoT_List)


