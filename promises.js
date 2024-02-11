//change the name of the file in <script src="promises.js"></script> in index.html
// Promises is for "eventual" completion of task. It is an object in JS.
// It is a solution to callBack hell.

let promise  = new Promise((resolve, reject) => {
console.log("hello world");
//resolve("successful");
reject("error occured");
});

function getData(DataId , getNextData) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("data" , DataId);
        if(getNextData){
            getNextData();

        }
    },2000);
    });
}