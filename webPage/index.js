let notesElem;
showNotes();
let panel=document.getElementById('panel');
let btn=document.getElementById('submit');
let other=document.getElementById('clear');
btn.addEventListener("click",function(e){
    let textadd=document.getElementById('inputtext');
    let notes=localstorage.getItem('notes');
    if(textadd.value=""){
        alert('Input is blank!!!');
    }else{
        if(notes==null){
            notesobj=[];
        }else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(textadd.value);
        localStorage.setItem('notes',JSON.stringify(notesObj));
        textadd.value="";
        showNotes();
    }
})
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes=null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        
        `
    })
}