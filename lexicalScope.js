//LEXICAL SCOPE

//A VARIABLE IS CREATED OUTSIDE OF A FUNCTION AND CAN BE ACCESSIBLE WITH IN THE FUNCTION


let x = 2;
function outerFun() {
    let y = 9

    console.log(x,y);           //(2,9)

    function innerFun(){
        let z = 40
        console.log(x,y,z);     //(2,9,40) it can acess every thing because of lexical scope
    }
    innerFun()
}
outerFun()
console.log(x);     // x is accessible because it is a global varia ble
//  console.log(y);     //y is not defined
//  console.log(z);     //z is not defined


//EXAMPLE 2


let name1 = "jayadev";
function main(){
    let name2 = "sujata"
    function displayName(){
        console.log(name1,name2);
    }
    displayName()
}
main()