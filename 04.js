// Create a function to detect a leap year. If I put 2018, the output will be false. 
// But, if I put 2004, the output will be true.

let year = 2018;

const lapYear = (year) => {
    var result = false;

        if((year % 4) == 0 ){
            if((year % 100) != 0){
                result = true;
            } else if((year % 400) == 0){
                result = true;
            }
        }

    return result;
}

console.log("Leap year? "+lapYear(year));
