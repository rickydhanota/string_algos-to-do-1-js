//1.Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function noBlanks(str){
    noSpaces = str.split(" ");
    // noSpaces.join();
    // console.log(noSpaces.join(""))
    return noSpaces.join("");
}
// console.log(noBlanks(" Pl ayTha tF u nkyM usi c "));

//2. Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function numStr(str){
    str.split(" ");
    var int='';
    for (var i=0; i<str.length; i++){
        if (str[i]%1==0){
            int += str[i];// int = int+str[i];
        }
    }
    // parseInt(int);
    return int;
}
y=numStr("0s1a3y5w7h9a2t4?6!8?0");
// console.log(y);

//3. Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str){
    str = str.toUpperCase();
    var arr = str.split(" ");
    var newArr=[""];
    for(var i=0; i<arr.length; i++){
        var splitWord = arr[i].split("");
        // console.log(splitWord);
        newArr.push(splitWord[0]);
    }
    newArr = newArr.join("");
    return newArr;
}
console.log(acronym("Live from New York, it's Saturday Night"));

//4. Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNS(str) {
    var strArr = str.split("");
    var count = 0;
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}
//5. Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}