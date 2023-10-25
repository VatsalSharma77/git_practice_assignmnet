function check_prime(num){
    let count = 0;
    if (num%2==0){
        count ++;
    }
    if (count == 2){
        return true;
    }
    else {
        return false;
    }
    
}

function answer (value){
    let ans = check_prime(value);
    if (ans == true){
        console.log(value," is a prime number.");
    }
    else {
        console.log(value," is not a prime number.");
    }
}

answer(1);