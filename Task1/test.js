let main = document.getElementById("main")
let menu = document.getElementById("menu")
let img = document.getElementById("image")
img.addEventListener("mouseover",()=>{
    img.style.display = "none";
     menu.style.display="flex"
})
img.addEventListener("mouseleave",()=>{
    img.style.display = "block";
     menu.style.display="none"
})



// let nums = [1,1,2]
// nums.sort();
// let arr =[];
// for (let i = 0; i < nums.length; i++) {
//         if( nums[i]!==nums[i+1] ) {
//       arr.push(nums[i])
//         }
   
//     }
      

// console.log("result:",arr);















// let nums = [1,3,5,6,9,2, 5,6]
// let tar= 11;
// function FindTwoSum(nums,tar) {
//     const NumMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         let currentMapVal = NumMap[nums[i]] 
//         if (currentMapVal >=0 ) {
//             console.log([currentMapVal,i]);
//             return [currentMapVal,i]
        
//         }
//         else{
//             let numberToFind = tar - nums[i]
//             NumMap[numberToFind]=i
//         }
//     }
//     return null;
// }
// console.log(FindTwoSum(nums,tar));
