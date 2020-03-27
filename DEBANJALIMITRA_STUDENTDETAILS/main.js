
function checkNum() {
    let num = document.getElementById("stuid").value;
    if (isNaN(num))
        alert("Please enter only numbers in ID field");
}

function checkFirstName() {
    let fname = document.getElementById("firstname").value;
    var matches = fname.match(/\d+/g);
    if (matches != null)
        alert("Please enter only alphabets in First Name field");
}

function checkLastName() {
    let lname = document.getElementById("lastname").value;
    var matches = lname.match(/\d+/g);
    if (matches != null)
        alert("Please enter only alphabets in Last Name field");
}


function checkEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value) != true)
        alert("Email format is wrong");
}


function Student(stuid, firstname, lastname, email) {
    this.stuid = stuid
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
}

Student.prototype.name = function () {
    return this.firstname + ' ' + this.lastname
}

var students = []

function addStudent() {
    let student = new Student(
        document.getElementById('stuid').value,
        document.getElementById('firstname').value,
        document.getElementById('lastname').value,
        document.getElementById('email').value
    )

    console.log("student object");
    console.log(student);

    students.push(student)

    console.log("students array")
    console.log(students)

    students.forEach(element => {
        console.log(element.name())
    });

    var table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var stuidCell = row.insertCell(0);
    var firstNameCell = row.insertCell(1);
    var lastNameCell = row.insertCell(2);
    var emailCell = row.insertCell(3);
    var editDataCell = row.insertCell(4);
    var deleteDataCell = row.insertCell(5);

    stuidCell.innerHTML = "<span style='color: green;'>" + students[students.length - 1].stuid + "</span>";
    firstNameCell.innerText = students[students.length - 1].firstname;
    lastNameCell.innerText = students[students.length - 1].lastname;
    emailCell.innerText = students[students.length - 1].email;
    editDataCell.innerHTML = "<button type='button' class='btn btn-primary' onclick='updateStudentForm(this)'>EDIT</button>"
    deleteDataCell.innerHTML = "<button type='button' class='btn btn-primary' onclick='deleteStudent(this)'>DELETE</button>"
}

function updateStudentForm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("updatebtn").disabled = false;
    document.getElementById("stuid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function editStudent() {
    selectedRow.cells[0].innerHTML = document.getElementById("stuid").value;
    selectedRow.cells[1].innerHTML = document.getElementById("firstname").value;
    selectedRow.cells[2].innerHTML = document.getElementById("lastname").value;
    selectedRow.cells[3].innerHTML = document.getElementById("email").value;
    document.getElementById("updatebtn").disabled = true;
}

function deleteStudent(td) {
    if (confirm('Data will be permanently deleted.Are you sure you want to delete it?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentsTable").deleteRow(row.rowIndex);
    }
}

function searchStudent() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];  //all datas
        tdd = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            txtValue2 = tdd.textContent || tdd.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                //alert("Searched user was not found");
            }
        }
    }
}
