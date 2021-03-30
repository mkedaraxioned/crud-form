/* Author: 

*/
let firstname,lastname,address,male,female,terms;
const form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', validateForm);
const resetbtn=document.getElementsByClassName('resetbtn')[0];
let form_ip=document.getElementsByClassName('form-ip');

resetbtn.addEventListener('click',() =>{
    clearForm();
    selected_ul=null;
});
let persons= {};
let inputs=['firstname','lastname','male','female','address','terms'];
let selected_ul=null;
function validateForm(event) {
    event.preventDefault();
    if(selected_ul!=null) {
        rowEditSubmit();
    }

    persons.firstname=form_ip[0].value;
    persons.lastname=form_ip[1].value;
    persons.address=form_ip[4].value;
    persons.male=form_ip[2].checked;
    persons.female=form_ip[3].checked;
    persons.terms=form_ip[5].checked;

    let formFlag=0;

    for(let i = 0 ; i < inputs.length; i++)
    {   
        if(i===2||i===3||i===5)
        continue;
        if(persons[inputs[i]]=="")
        {
            alert("Please enter "+inputs[i]);
            formFlag=1; 
        }
    }
     
          if((!persons.male)&&(!persons.female))
          {
              alert("Please Choose gender");
              formFlag=1; 
          }      

      if(!persons.terms){
        alert("Please Accept terms and Conditions by selecting checkbox");
        formFlag=1;
      }

      if(formFlag===0) 
      {
        alert("Thank you");
        if(persons.male)
        {
            gender="Male";
        }
        else if (persons.female)
        {
            gender="Female";
        }
        if(selected_ul==null){
            insertData(persons.firstname,persons.lastname,gender,persons.address);
        }

      }

  }

function insertData(firstname,lastname,gender,address) {
    let div_to_add=document.getElementsByClassName('personlist')[0];
    let ul_main= document.createElement('ul');
    let li=[];
   for(let i=0;i<6;i++) {
         li[i]= document.createElement('li');
    }

    li[0].innerHTML="<span>"+firstname+"</span>";
    li[1].innerHTML="<span>"+lastname+"</span>";
    li[2].innerHTML="<span>"+gender+"</span>";
    li[3].innerHTML="<span>"+address+"</span>";
    li[4].innerHTML='<button onClick="rowEdit(this)">Edit</button>';
    li[5].innerHTML='<button onClick="rowDelete(this)">Delete</button>';


    for(let i=0;i<6;i++){ 
    ul_main.appendChild(li[i]);
    }
    div_to_add.appendChild(ul_main);

    clearForm();

}

function clearForm() {
    for(let i = 0 ; i < inputs.length; i++)
    {   
        if(i===2||i===3||i===5){
            form_ip[i].checked=false;
            continue;
        }
        form_ip[i].value="";        
    }
    selected_ul = null;
}

function rowEdit(sel_span) {
    selected_ul = sel_span.parentElement.parentElement;
    form_ip[0].value = selected_ul.childNodes[0].childNodes[0].innerHTML;
    form_ip[1].value = selected_ul.childNodes[1].childNodes[0].innerHTML;
    form_ip[4].value = selected_ul.childNodes[3].childNodes[0].innerHTML;    
    if(selected_ul.childNodes[2].childNodes[0].innerHTML=="Male"){
        form_ip[2].checked = true;
    }
    else if(selected_ul.childNodes[2].childNodes[0].innerHTML=="Female")
    {
        form_ip[3].checked = true;
    }
    form_ip[5].checked = true;
}


function rowEditSubmit() {
    selected_ul.childNodes[0].childNodes[0].innerHTML=form_ip[0].value;
    selected_ul.childNodes[1].childNodes[0].innerHTML=form_ip[1].value;
    selected_ul.childNodes[3].childNodes[0].innerHTML=form_ip[4].value;    
    if(form_ip[2].checked){
        selected_ul.childNodes[2].childNodes[0].innerHTML="Male";
    }
    else if(form_ip[3].checked)
    {
        selected_ul.childNodes[2].childNodes[0].innerHTML="Female";
    }
    selected_ul = 1;
}

function rowDelete(sel_span) {
    if (confirm('Delete this person')) {
        let remove_ul = sel_span.parentElement.parentElement;
        remove_ul.remove();
        clearForm();
    }
}





















