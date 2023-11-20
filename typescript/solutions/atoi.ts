export function myAtoi(s: string): number {
  const trimmedS = s.trim();
  let newString = "";
  
  for(let i = 0; i < trimmedS.length; i++) {
    if(i === 0){
      if (trimmedS[i]==="+" || trimmedS[i] ==="-" || !isNaN(Number(trimmedS[i]))){
        newString+=trimmedS[i];
      }
      else {
        return 0
      }
    }
    else{
      if(!isNaN(Number(trimmedS[i]))){
        newString+=trimmedS[i];
      }
      else {
        return Number(newString)
      }
    }
  }
  return Number(newString)
};