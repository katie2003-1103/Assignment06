// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm')
let thetable = document.querySelector('#employees')

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let idValue = document.querySelector('#id').value 
    let nameValue = document.querySelector('#name').value 
    let extensionValue = document.querySelector('#extension').value 
    let emailValue = document.querySelector('#email').value 
    let departmentValue = document.querySelector('#department').value 
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = thetable.insertRow()
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellid = row.insertCell()
    let cellname = row.insertCell()
    let cellextension = row.insertCell()
    let cellemail = row.insertCell()
    let celldepartment = row.insertCell()
    let celldelete = row.insertCell()
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellid.appendChild(document.createTextNode(idValue))
    cellname.appendChild(document.createTextNode(nameValue))
    cellextension.appendChild(document.createTextNode(extensionValue))
    cellemail.appendChild(document.createTextNode(emailValue))
    celldepartment.appendChild(document.createTextNode(departmentValue))
// CREATE DELETE BUTTON 
    let deleteBtn = document.createElement('button')
// ADD BOOTSTRAP CLASSES TO STYLIZE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
// CREATE TEXT NODE FOR DELETE BUTTON AND SET TO 'X'
    let textDelete = document.createTextNode('X')
//APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    celldelete.appendChild(deleteBtn) 
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
})

// DELETE EMPLOYEE
// EVENT HANDLER TO HANDLE DELETE BUTTON 
thetable.addEventListener('click', (e) => {
    // MAKE SURE ONLY DELETE BUTTON IS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY DELETE CONFIRMATION BOX
        if (confirm('Are you sure want to delete this task?')) {
            //REMOVE SELECTED UI
           thetable.removeChild(e.target.parentElement)
    // CHECK TO SEE IF THERE ARE ANY TASKS BEING DISPLAYED
    checkMessageDisplay()
        } 
}
})

// FUNCTION TO SHOW OR HIDE 'NO TASKS" ALERT
function checkMessageDisplay() {
    if (thetable.children.length) === 0 {
    document.querySelector('span').classList.add('show')
    } else { 
    document.querySelector('span').classList.remove('show')
    }
}







// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
// form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

// })

// DELETE EMPLOYEE


// ADD ROW
// let row = thetable.insertRow()
// let cellid = row.insertCell('id')
// let cellname = row.insertCell('name')
// let cellextension = row.insertCell('extension')
// let cellemail = row.insertCell('email')
// let celldepartment = row.insertCell('department')
// let celldelete = row.insertCell('department')

// cellid.appendChild(document.createTextNode('id'))
// cellname.appendChild(document.createTextNode('name'))
// cellextension.appendChild(document.createTextNode('extension'))
// cellemail.appendChild(document.createTextNode('email'))
// celldepartment.appendChild(document.createTextNode('department'))

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER