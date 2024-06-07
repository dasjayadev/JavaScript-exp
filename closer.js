//CLOSER

//FUNCTION ALONG WHITH ITS LEXICAL SCOPE BONDEL-TOGATHER FORMS CLOSER

//EXAMPLE 1

function createCloser(){
    let count = 0;
    return function(){
        count+=1;
        return count
    };
}
let count = createCloser()
console.log(count());           // 1



//EXAMPLE 2


function makeFunc (){
    let name = 'jayadev'
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let myFunc = makeFunc()
myFunc();