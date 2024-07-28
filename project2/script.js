const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault() //to prevent the default action of form when submitted it will go to server
    const height=parseInt(document.querySelector('#height').value)
    
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    console.log(result)

     

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`
    }
  else  if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`please give a valid weight ${weight}`
    }

   else{
   let bmi= (weight / ((height*height)/10000)).toFixed(2)
   result.innerHTML=`<span>${bmi}</span>`
   
   if(bmi<18.6){
    result.innerHTML=`underweight ${bmi}`
   }
   if(bmi>24.9){
     result.innerHTML=`overweight ${bmi}`
   }
   
   }




}
)