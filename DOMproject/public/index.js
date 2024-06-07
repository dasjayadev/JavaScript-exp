let submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click',function(){
    let name = document.getElementById('name').value
    let designation = document.getElementById('designation').value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let salary = document.getElementById('salary').value

    if(!name || !designation || !gender || !salary){
        alert('Please fill all the fields')
        return;
    }
    let table = document.getElementById('emp_data')
    let newRow = table.insertRow();

    let nameCell = newRow.insertCell(0);
    let designationCell = newRow.insertCell(1);
    let genderCell = newRow.insertCell(2);
    let salaryCell = newRow.insertCell(3);

    nameCell.textContent = name
    designationCell.textContent = designation
    genderCell.textContent = gender
    salaryCell.textContent = salary

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('designation').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('salary').value = '';
})


//to read the data

let readData = document.getElementById('emp_data')