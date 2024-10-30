function convert(){
const enternumber=document.querySelector("#entnum").value;
let result=document.querySelector(".result");
 const s=document.querySelector("#select").value;
 if(s==="mtok"){
  result.innerHTML="Result: " + (enternumber*1.60934) + " km";
  console.log(result.innerHTML);
 } else{
  result.innerHTML="Result: " + (enternumber*0.6213727366498067) + " miles";
  console.log(result.innerHTML);
 }
}