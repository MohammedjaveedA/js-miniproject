const clock=document.querySelector('#clock')


setInterval(function(){
    let date=new Date()
    clock.innerText=date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString())
},1000)