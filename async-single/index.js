const countTo1b  = new Promise((resolve, reject)=>{
		let i = 0;
		console.log("before loop")
		while(i < 1_000_000_000){
			i++;
		}
		console.log("after loop")
		resolve("done");
	})
	


const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("foo");
	}, 300);
  });
  

const count =  ()=>{
	countTo1b();


}
myPromise.then(res=> {
	console.log(res)
})


countTo1b.then(res=> {
	console.log(res)
})
console.log("in main")
