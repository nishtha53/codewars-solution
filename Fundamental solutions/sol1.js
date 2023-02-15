//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string 

/*    SOlution   */

function boolToWord( bool )
{ 
    const str = bool === true ? "Yes" : "No";
    return str;
}

//Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation. Examples(Operator, value1, value2) --> output ('+', 4, 7) --> 11 ('-', 15, 18) --> -3 ('*', 5, 5) --> 25 ('/', 49, 7) --> 7


/*   SOlution */

//approach(this can be done with the help of switch case)


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.Array can contain numbers or strings. X can be either.Return true if the array contains the value, false if not.

/* SOlution */

function check(a,x)
{
    if(a.includes(x))
    {
        return true;
    }
    else
    {
        return false;
    }
}
