//for:

let arr=["Hello",12,"People",10.87];

// for(let i=0;i<arr.length;i++){
//     // const ele=arr[i];
//     console.log(arr[i]);
//     // console.log("\n");
// }

for(let j=0;j<10;j++){
    if(j==4)
    {
        console.log("Perfect square");
       break;
    }
    console.log(`number is ${j}`);
}




//while:
let i=0;
while(i<=50){
    console.log(`Value of number is ${i}`)
    i+=10;
}



//for of:

for(const num of arr){
    console.log(num);
} 



// Maps:
const map=new Map();
map.set('IN','India')
map.set('US','United States of America')
map.set('UK','United Kingdom')
map.set('FR','France')

console.log(map);
console.log();
for(const [elek,elev] of map)
{
    console.log(`${elek}:-${elev}`);
}




//iterating objects:

const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
// for(const [key,value] of myObject){        //myObject is the object cand it cannot be iterated using this format
//     console.log(`${key}-${value}`);
// }

for(const key in myObject){
    console.log(`${key}-${myObject[key]}`);
}


//object ka design hi iss vajah se hua ki hum apne iccha se keys de skte hai
//kyuki array me key humesha 0 to number of elements-1 tak jata hai


arr=["Hello",12,"People",10.87];
for(const num in arr)
{
    console.log(num);
}