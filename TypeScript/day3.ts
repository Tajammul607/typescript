const predicate =(num:number[])=>{
    let newArr:number[]=[];
     
    for(let i=0; i<num.length; i++){
        if(num[i]%2===0){
            newArr.push(num[i])
        }else{
            continue
        }
    }
    return newArr

}

const mergeArray =(num1:number[],num2:number[])=>{
    let newArr:number[]=[];
    for(let i=0; i<num1.length; i++){
        newArr.push(num1[i])
    }

    for(let i=0; i<num2.length; i++){
        newArr.push(num2[i])
    }

    return newArr
}

const mergeArray1 =(num1:number[],num2:number[])=>{
    let i=0;
    let j=0;

    while(i<num1.length && j<num2.length){
        num1.push(num2[j]);
        j++
    }

    return num1;
}

let a:number[]=[1,8,2,3]

let b:number[]=[4,5,6];

// console.log(mergeArray1(a,b))


const findMax=(num:number[])=>{
    let maxNumber=Number.MIN_VALUE;

    for(let i=0; i<num.length; i++){
    for(let j=i+1; j<num.length; j++){
        if(num[j]>maxNumber){
            maxNumber=num[j];
        }
    }
    }
    return maxNumber;
}

const findMax1=(num:number[])=>{
    let maxNumber=Number.MIN_SAFE_INTEGER;
    for(let i=0; i<num.length; i++){
        if(num[i]>maxNumber){
            maxNumber=num[i];
        }
    }

    return maxNumber
}
console.log(findMax1(a))


