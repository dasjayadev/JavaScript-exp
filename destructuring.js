//                         //Object De-structuring

// let obj = {
//     name: "jayadev",
//     age:28,
//     address: {
//         pa:"odisha",
//         ca:"Bengaluru"
//     },
//     email:"jayadev.das2581@gmail.com"
// }

// let {name: firstName,age,address,email} = obj  // in this way we can de-structure the OBJECT

// console.log(firstName);  //instade of name we can use the aliasing name as (firstName)

// let obj={
//             name:'utsav',
//             add:'delhi',
//             hobbies:{
//                 ch:'nothing',
//                 ph:{
//                     Ith:'earning money',
//                     sth:"gaining exp"
//                 }
//             }
//         }

// default
// let {name,add,hobbies:{ch,ph:{Ith="hello",sth}}}=obj
// console.log(Ith)
// console.log(obj.name)
// console.log(obj.hobbies.ph.sth)

//ARRAY De-structuring

// let arr = [1, 2, 3, 4, 5, 6];
//skiping
// let [a, , , d] = arr;
// console.log(a,d);
// nested
let arr1 = [1, 2, 3, 4, [5, "utsav", ["ram", "x", ["hello", "how"]]], 6];
console.log(arr1[4][2][2][1]);
let [, , , , [, , [, , [a, b, c = "utsav"]]]] = arr1;
console.log(a, b, c);

//mixing
// let data = {
//     name: 'utsav', add: {
//         pa: 'delhi',
//         ca: [{ lastyear: 'spice gardern', now: ['a', 1234, { galino: 4, postoffice: 'marathalli' }] }]
//     }
// }
// let{add:{ca:[{now:[,,{postoffice}]}]}} =data
// console.log(postoffice)
// console.log(data.add.ca[0].now[2].postoffice)
