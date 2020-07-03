int compareStrings(char* haystackPart, char* needle);
int strStr(char * haystack, char * needle){
    int needleOccurFlag = 0;
    int startIndex = 0;
    int index = 0;
    int needleLength = strlen(needle);
    
    if(needleLength==0){
        return 0;
    }
    if(needleLength>strlen(haystack))
        return -1;
    
    for(int i = 0; i<=strlen(haystack)-needleLength; i++){
        needleOccurFlag = compareStrings(haystack+i, needle);
        if(needleOccurFlag == 1)   
            return index;
        index++;
    }
    
    if(needleOccurFlag == 0){
        return -1;
    }
    if(needleOccurFlag == 1){
        return startIndex;
    }
    return 2;
}
int compareStrings(char* haystack, char* needle){
    int flag = 0;
    char* haystackPart = (char *) calloc(strlen(needle)+1, sizeof(char));
    strncpy(haystackPart, haystack, strlen(needle));

  
    if(strcmp(haystackPart, needle)==0){
        flag = 1;
    }
    else{
        flag = 0;
    }
    free(haystackPart);
    return flag;
}