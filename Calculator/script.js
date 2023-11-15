let answer=""
let btns=document.querySelectorAll('.num1');
let disp=document.querySelector('.display')
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(a)=>{
        let v=a.target.innerHTML
        if(v!='C') answer=answer+v
        else answer=''
        if(v=='C') disp.innerHTML=""
        else  disp.innerHTML+=v
        // else if(v!='C'&& disp.innerHTML=="") disp.innerHTML=v
        // else disp.innerHTML+=v
    })
})
let entr=document.querySelector(".enter")
entr.addEventListener('click',(e)=>{
    let a=eval(answer)
    // console.log(a)
    disp.innerHTML=a
})
// let disp=document.getElementsByClassName('.display')
// console.log(disp)