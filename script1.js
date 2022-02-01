document.getElementById("addC").addEventListener("click",function(){
    document.querySelector('.popup').style.display='flex';
})
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.popup').style.display='none'
})


document.getElementById('delC').addEventListener('click',function(){
    document.querySelector('.popup2').style.display='flex'
})
document.querySelector('.close2').addEventListener('click',function(){
    document.querySelector('.popup2').style.display='none';
})
function saveData(){
let name,tel,email,added,updated
name = document.getElementById('name').value;
tel = document.getElementById('tel').value;
email = document.getElementById('email').value;
added = document.getElementById('added').value;
updated = document.getElementById('updated').value;

localStorage.setItem('name',name)
localStorage.setItem('tel',tel)
localStorage.setItem('email',email)
localStorage.setItem('added',added)
localStorage.setItem('updated',updated)
name.value='';
tel.value='';
email.value='';
added.value='';
updated.value='';


}
