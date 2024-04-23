

function uppercaseFirstLetter(myString)
{
    console.log(myString.slice(0,1));
    //console.log(myString.character(0));
    console.log(myString.length);
    let firstLetter = myString.slice(0, 1).toUpperCase();
    let secondPart = myString.slice(1);
    return firstLetter + secondPart;
    //console.log(firstLetter + secondPart);
}
uppercaseFirstLetter("kasia")=="kasia";
uppercaseFirstLetter("kAsia")=="KAsia";
uppercaseFirstLetter("hello")=="hello";
