/* Author: 

*/
let firstname,lastname,address,male,female,terms;
const form = document.getElementById('personinfo');
form.addEventListener('submit', validateForm);
let person = {};
function validateForm(event) {
    event.preventDefault();
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    address = document.getElementById('address').value;
    male = document.getElementById('male').checked;
    female = document.getElementById('female').checked;
    terms=document.getElementById('terms').checked;
    let formFlag=0;
    if(firstname=="")
      {
        alert("Please enter Firstname");
        formFlag=1;
      }
      if(lastname=="")
      {
        alert("Please enter Lastname");
        formFlag=1;
      }
      if(address=="")
      {
        alert("Please enter Address");
        formFlag=1;
      }
      if(!male)
      {
          if(!female)
          {
            alert("Please Choose gender");
            formFlag=1;
          }

      }
      if(!terms){
        alert("Please Accept terms and Conditions by selecting checkbox");
        formFlag=1;
      }
      if(formFlag===0) 
      {
        alert("Thank you");
        if(male)
        {
            gender="Male";
        }
        else if (female)
        {
            gender="Female";
        }
        person.firstname=firstname;
        person.lastname=lastname;
        person.gender=gender;
        person.address=address;
        insertData(firstname,lastname,gender,address);
      }

  }

function insertData(firstname,lastname,gender,address){
    let tbody= document.getElementById('tbody');
    let row=tbody.insertRow(0);
    let tableFirstname = row.insertCell(0);
    let tableLastname = row.insertCell(1);
    let tableGender=row.insertCell(2);
    let tableAddress=row.insertCell(3);
    let tableEdit=row.insertCell(4);
    let tableDelete=row.insertCell(5);
    tableFirstname.innerHTML =firstname;
    tableLastname.innerHTML=lastname;
    tableGender.innerHTML=gender;
    tableAddress.innerHTML=address;
    tableEdit.innerHTML='<a onClick="rowEdit(this)">Edit</a>';
    tableDelete.innerHTML='<a onClick="rowDelete(this)">Delete</a>';

}


// let table1= document.getElementByTagName(table)[0];
// table1.insertRow






















