const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp =  tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);
    

    const Show_result = document.getElementById('resultContainer');

    function celToFareh(cel){
        return (cel*(9/5)) + 32;
    }

    function farehToCel(fah){
        return (fah - 32) * (5/9);
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFareh(numberTemp);
        // console.log(result + ' fah');
        Show_result.innerHTML = `= ${result} °Fahrenheit`;
    }
    else{
        result = farehToCel(numberTemp);
        // console.log(result + 'cel');
        Show_result.innerHTML = `= ${result} °Celsius`;
    }

}