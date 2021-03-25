/* Author: 

*/
let firstname,lastname,address,male,female,terms;
const form = document.getElementById('personinfo');
form.addEventListener('submit', validateForm);
const resetbtn=document.getElementById('resetbtn');
resetbtn.addEventListener('click',() =>{
    clearForm();
    selectedRow=null;
});
let person = {};
let selectedRow=null;
function validateForm(event) {
    event.preventDefault();
    if(selectedRow!=null) {
        // alert("selected row");
        rowEditSubmit();
    }
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
        if(selectedRow==null){
            insertData(firstname,lastname,gender,address);
        }

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
    tableEdit.innerHTML='<button onClick="rowEdit(this)">Edit</button>';
    tableDelete.innerHTML='<button onClick="rowDelete(this)">Delete</button>';
    clearForm();

}

function clearForm() {
    document.getElementById('firstname').value="";
    document.getElementById('lastname').value="";
    document.getElementById('address').value="";
    document.getElementById('male').checked="";
    document.getElementById('female').checked="";
    document.getElementById('terms').checked="";
}

function rowEdit(cell) {
    selectedRow = cell.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;    
    if(selectedRow.cells[2].innerHTML==="Male"){
        document.getElementById("male").checked = true;
    }
    else if(selectedRow.cells[2].innerHTML==="Female")
    {
        document.getElementById("female").checked = true;
    }
    document.getElementById("terms").checked = true;
}


function rowEditSubmit() {
    selectedRow.cells[0].innerHTML = document.getElementById("firstname").value ;
    selectedRow.cells[1].innerHTML = document.getElementById("lastname").value;
    if(selectedRow.cells[2]==='Male'){
        selectedRow.cells[2].innerHTML = document.getElementById("male").value;
    }
    else if(selectedRow.cells[2]==='Female')
    {
        selectedRow.cells[2].innerHTML = document.getElementById("female").value = checked;
    }
    selectedRow.cells[3].innerHTML = document.getElementById("address").value ;
    selectedRow = 1;
}

function rowDelete(cell) {
    if (confirm('Delete this person')) {
        row = cell.parentElement.parentElement;
        document.getElementById("tbody").deleteRow(cell.rowIndex);
        clearForm();
    }
}





















