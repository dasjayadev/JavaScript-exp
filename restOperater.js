
//REST OPERATER

//  REST OPARATER IS ALLOW A FUNCTION TO ACCEPT ANY NO OF ARGUMENTS AS AN AARAY

function sumTwo (a,b,...args){

    console.log(args);                   //[ 733, 56, 0 ]
    let multi = a*b
    let sum = 0;
    for (const arg of args) {
        sum += arg
    }
    return [sum, multi]
}
console.log(sumTwo(1,5,733,56,0));      //[ 789,5 ]


//sprade oprater ( it can pass ANY NO OF ARGUMENT IN IT )