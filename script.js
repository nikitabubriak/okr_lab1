//Task 1
function arr(n)
{
    let array = new Array(n);

    for (let i = 0; i < n; i++)
    {
        array[i] = i;
    }

    return array;
}

console.log(arr(5));

//Task 2
function divisionCheck(a, b, c)
{
    if (a % b === 0 && a % c === 0) 
        return true;
    else    
        return false;
}

console.log(divisionCheck(-12, 2, -6));
console.log(divisionCheck(-12, 2, -5));

//Task 3
function capitalize(string)
{
    if (string.length < 1 || string.length > 10) 
        return 'The string should contain from 1 to 10 symbols';
    else
        return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize('work'));