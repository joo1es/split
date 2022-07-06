export const variance = (numbers: number[]) => {  
    let mean = 0;  
    let sum = 0;  
    for(let i = 0; i < numbers.length; i++){  
        sum += numbers[i];  
    }  
    mean = sum / numbers.length; 
    sum = 0;  
    for(let i = 0; i < numbers.length; i++){  
        sum += Math.pow(numbers[i] - mean , 2); 
    }  
    return sum / numbers.length; 
}

export const avarage = (numbers: number[]) => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum / numbers.length
}