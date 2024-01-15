function sum(array) {
    result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

function roman(str) {
    roman_num = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'O'];
    value = [1, 5, 10, 50, 100, 500, 1000, 0];
    result = [];

    str += 'O';

    for (i = 0; i < str.length - 1; i++) {
        current_str = str[i];
        value_of_current_str = value[roman_num.indexOf(current_str)];

        if (value[roman_num.indexOf(current_str)] < value[roman_num.indexOf(str[i + 1])]) {
            result.push(-value[roman_num.indexOf(current_str)]);
            result.push(value[roman_num.indexOf(str[i+1])]);
            i++;
        }

        else {
            result.push(value[roman_num.indexOf(current_str)]);
        }
    }


    console.log(result);
    return sum(result);
}

console.log(roman('CDXLIX'));
