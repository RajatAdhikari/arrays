const isAllPass = (N, Arr) => 
{
  let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"
    
};
 
const Find_Sum = (array, N) => 
{
  let sum=0
  for(let i=0;i<N;i++){
    sum+=array[i]
  }
return sum
};

const findCount = (N, K, Arr) => 
{
    let count=0;
    for(let i=0;i<N;i++){
      if(Arr[i]==K){
        count+=1
      }
    }
    return count
};

const findEvenOdd = (N, Arr) => 
{
    let B=[2]
    let evensum=0
    let oddsum=0
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        evensum+=Arr[i]
      }
      else{
        oddsum+=Arr[i]
      }
      
    }
    B[0]=evensum
    B[1]=oddsum
    return B
    
};

const Find_Num = (array,N,M) => 
{
  for(let i=0;i<N;i++){
    if(array[i]===M){
      return 'YES'
    }
    
  }
  return "NO"
};

const highAge = (N, Arr) => 
{
  let arr=[]
  let j=0
  
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      arr[j++]=Arr[i]
    }
  }
  
  return arr
  
    
};

const Inc_Arr = (array,N) => 
{
  let tem=[]
  let result=""
  let j=0
  for(let i=0;i<N;i++){
    tem[j]=array[i]+1
    result=result+" "+tem[j]
    j++
  }
 console.log(result)
};

const isAllPass = (N, Arr) => 
{
  let count=0
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count+=1
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES"
  }
  return "NO"
    
};
 
function Unique_Shirts (arr,N) {

    let shirt="";
     let count=0;
     for(let i=0;i<N;i++){
         let sum=0;
         for(let j=0;j<N;j++){
             if(arr[i]==arr[j]){
                 sum++;
             }
 
         }
         if(sum==1){
             shirt=shirt+arr[i];
             count++;
         }
 }
 return count;
 }

 function arrayMin(arr) {
    return (Math.min(...arr))
 }

function arrayMax(arr) {
  return (Math.max(...arr))
  
}

function Birthday_Game(arr,D ,M) {
    let count = 0;
            for(let i = 0; i < arr.length - 1; i++){
                 let array1 = arr.slice(i, i+M);
                 if (array1.length === M) {
                    let sum = array1.reduce((a,b) => a + b, 0);
                    if(sum === D){
                         count=count+ 1;
                     }
                  }
            }
            return count;
   }