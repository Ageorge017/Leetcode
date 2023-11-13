function isAnagram(s: string, t: string): boolean {
  const remainingCharCount = checkOffChars(objectifyString(s), t);
  return remainingCharCount ? !Object.values(remainingCharCount).filter((value)=>value!==0).length : false
};

const objectifyString = (s: string): Record<string, number> => {
  const obj:Record<string, number> = {};
  s.split("").forEach((char)=>{
    if(obj[char]){
      obj[char] = obj[char]+1
    }
    else {
      obj[char]=1;
    }
  })
  return obj;
}

const checkOffChars = (obj: Record<string, number>, t:string):Record<string, number>|null => {
  const tSplit = t.split("")
  
  for (let i = 0; i<tSplit.length; i++){
    if(obj[tSplit[i]]){
      obj[tSplit[i]] = obj[tSplit[i]]-1
    }
    else return null;
  }
  return obj
}
