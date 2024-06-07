
//it take the group and it try to sprade it to the multipul values

function sumOne(a,b){
    return a+b
}
let mySum = [1,2,]
console.log(sumOne(...mySum));

//it take the group or array and separate indivisualy......


// let arr=[1,2,3,4,[8,9]]
//          let arr2=[...arr]
//          arr2[4][0]="urtsav"
//          console.log(arr,arr2)

//1.by using this  you can do combine one and more array
        let arr=[1,2,3]
        let arr2=[4,5,6,7]
        let arr3=[678,9,2]
        let result=[...arr,...arr2,...arr3,'utsav']
        console.log(result)