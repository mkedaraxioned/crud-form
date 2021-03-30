/* Author: 

*/
let firstname,lastname,address,male,female,terms;
const form = document.getElementById('personinfo');
form.addEventListener('submit', validateForm);
const resetbtn=document.getElementById('resetbtn');
let form_ip=document.getElementsByClassName('form-ip');

resetbtn.addEventListener('click',() =>{
    clearForm();
    selected_ul=null;
});
let persons= {};
let person = {};
let inputs=['firstname','lastname','male','female','address','terms'];
let counter = 0;
let selected_ul=null;
function validateForm(event) {
    event.preventDefault();
    if(selected_ul!=null) {
        // alert("selected row");
        rowEditSubmit();
    }
    // console.log(inputs);
    // for (let i = 0; i < 3; i++) {
    //     persons.inputs[i] = form_ip[i].value; 
    // }

    persons.firstname=form_ip[0].value;
    persons.lastname=form_ip[1].value;
    persons.address=form_ip[4].value;
    // console.log(persons.firstname);
    // for (let i = 3; i < inputs.length; i++) {
    //     persons.inputs[i] = form_ip[i].checked;        
    // }

    persons.male=form_ip[2].checked;
    persons.female=form_ip[3].checked;
    persons.terms=form_ip[5].checked;


    // firstname = document.getElementById('firstname').value;
    // lastname = document.getElementById('lastname').value;
    // address = document.getElementById('address').value;
    // male = document.getElementById('male').checked;
    // female = document.getElementById('female').checked;
    // terms=document.getElementById('terms').checked;
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

    // if(firstname=="")
    //   {
    //     alert("Please enter Firstname");
    //     formFlag=1;
    //   }
    //   if(lastname=="")
    //   {
    //     alert("Please enter Lastname");
    //     formFlag=1;
    //   }
    //   if(address=="")
    //   {
    //     alert("Please enter Address");
    //     formFlag=1;
    //   }
    //   if(!male)
    //   {
    //       if(!female)
    //       {
    //         alert("Please Choose gender");
    //         formFlag=1;
    //       }

    //   }


     
          if((!persons.male)&&(!persons.female))
          {
              alert("Please Choose gender");
              formFlag=1; 
          }
      
    //   if(!terms){
    //     alert("Please Accept terms and Conditions by selecting checkbox");
    //     formFlag=1;
    //   }

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
        // person.firstname=firstname;
        // person.lastname=lastname;
        // person.gender=gender;
        // person.address=address;
        // console.log(persons[inputs[3]]);
        if(selected_ul==null){
            // persons[counter].id=counter;
            insertData(persons.firstname,persons.lastname,gender,persons.address);
            counter++;
        }

      }

  }

function insertData(firstname,lastname,gender,address){
    // let tbody= document.getElementById('tbody');
    // let row=tbody.insertRow(0);
    // let tableFirstname = row.insertCell(0);
    // let tableLastname = row.insertCell(1);
    // let tableGender=row.insertCell(2);
    // let tableAddress=row.insertCell(3);
    // let tableEdit=row.insertCell(4);
    // let tableDelete=row.insertCell(5);
    // tableFirstname.innerHTML =firstname;
    // tableLastname.innerHTML=lastname;
    // tableGender.innerHTML=gender;
    // tableAddress.innerHTML=address;
    // tableEdit.innerHTML='<button onClick="rowEdit(this)">Edit</button>';
    // tableDelete.innerHTML='<button onClick="rowDelete(this)">Delete</button>';


    let div_to_add=document.getElementsByClassName('personlist')[0];
    let ul_main= document.createElement('ul');
    // for(let i=0;i<4;i++){
        // let li[i]= document.createElement('li');
    //     li[i].innerHTML="<span>"+inputs[i]+"</span>";
    // }

    let li=[];
   for(let i=0;i<6;i++){
         li[i]= document.createElement('li');
    }
    // let li0= document.createElement('li');
    // let li1= document.createElement('li');
    // let li2= document.createElement('li');
    // let li3= document.createElement('li');
    // let li4= document.createElement('li');
    // let li5= document.createElement('li');

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
    // document.getElementById('firstname').value="";
    // document.getElementById('lastname').value="";
    // document.getElementById('address').value="";
    // document.getElementById('male').checked="";
    // document.getElementById('female').checked="";
    // document.getElementById('terms').checked="";
    // for (let i = 0; i < 3; i++) {
    //     form_ip[i].value="";        
    // }
    // for (let i = 3; i < inputs.length; i++) {
    //     form_ip[i].checked=false;
    //     // previously marked ""        
    // }
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

    // selected_ul.cells[0].innerHTML = document.getElementById("firstname").value ;
    // selected_ul.cells[1].innerHTML = document.getElementById("lastname").value;
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





















