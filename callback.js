//change the name of the file in <script src="callback.js"></script> in index.html
//callBack 

function getData(DataId , getNextData) {
    setTimeout(() => {
        console.log("data" , DataId);
        if(getNextData){
            getNextData();

        }
    },2000);
}
//callback hell(nested callbacks)
getData(1, () =>{
    console.log("getting data2...");
    getData(2 ,() =>{
        console.log("getting data3...");
        getData(3,()=>{
            console.log("All Data is fetched");
                
            });
        });
    });