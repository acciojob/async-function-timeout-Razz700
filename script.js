//your JS code here. If required.
let input1=document.getElementById('text');
let input2=document.getElementById('delay');
let btn=document.getElementById('btn');
let out=document.getElementById('output');
btn.addEventListener('click',()=>{
	out.innerHTML="";
	const p1=new Promise((a,b)=>{
	setTimeout(()=>{
		a('resolved');
	},parseInt(input2.value));
});
	async function f1() {

		let res= await p1;
		out.innerHTML=`${input1.value}`;
		input1.value='';
	    input2.value="";
}
f1();
	
});

