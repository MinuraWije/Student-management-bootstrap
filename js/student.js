import StudentModel from "./StudentModel.js";

var students = [];
let clickedRecord;

/*$('#student-section').css({display: 'none'});
$('#course-section').css({display: 'none'});*/

$('#nav-home').on('click',() =>  {
    $('#student-section').css({display: 'block'});
    $('#course-section').css({display: 'block'});
});
$('#nav-student').on('click',() =>  {
    $('#student-section').css({display: 'block'});
    $('#course-section').css({display: 'none'});
});
$('#nav-course').on('click',() =>  {
    $('#course-section').css({display: 'block'});
    $('#student-section').css({display: 'none'});
});

function loadTable() {

    $('#student-table-body').empty();

    students.map((item, index) => {
        var record = `<tr>
               <td class="student-id-value">${item.id}</td>
               <td class="student-firstname-value">${item.firstName}</td>
               <td class="student-lastname-value">${item.lastName}</td>
               <td class="student-address-value">${item.address}</td>
               <td class="student-program-value">${item.program}</td>
                </tr>`;

        $('#student-table-body').append(record);

    });
}

$('#student-submit').on('click', () => {
    var studentId = $('#StudentId').val();
    var studentFirstName = $('#firstName').val();
    var studentLastName = $('#lastName').val();
    var studentAddress = $('#address').val();
    var program = $('input[name="flexRadioDefault"]:checked').val();

    console.log("id : ", studentId);
    console.log("Student first name : ", studentFirstName);
    console.log("Student last name : ", studentLastName);
    console.log("Address : ", studentAddress);
    console.log("Program : ", program);


    let student = new StudentModel(studentId,studentFirstName,studentLastName,studentAddress,program);
    /*let student = {
        id: studentId,
        firstName: studentFirstName,
        lastName: studentLastName,
        address: studentAddress,
        program: program
    }*/

    //push to the array
    students.push(student);
    console.log(students);
    loadTable();

});

/*$('#student-table-body tr').on('click',() => {
    console.log("I'm tr");
});*/

$('#student-table-body').on('click','tr', function () {  //event delegation
    let index = $(this).index();
    clickedRecord = index;
    let id = $(this).find(".student-id-value").text();
    let firstName = $(this).find(".student-firstname-value").text();
    let lastName = $(this).find(".student-lastname-value").text();
    let address = $(this).find(".student-address-value").text();
    let program = $(this).find(".student-program-value").text();

    $('#StudentId').val(id);
    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#address').val(address);
    /*$(`input[name="flexRadioDefault"][value=${program}]`).prop('checked',true);*/
    $('input[name="flexRadioDefault"][value="' + program + '"]').prop('checked', true);

});



/*
$('#nav-student').on('click',()=>{

    $('#coursePage').removeClass("open");
    $('#studentPage').removeClass("close");
    $('#studentPage').addClass("open");
    $('#coursePage').addClass("close");
    console.log("clickedStudent");

})
$('#nav-course').on('click',()=>{
    $('#studentPage').addClass("close");
    $('#coursePage').removeClass("close");
    $('#coursePage').addClass("open");
    console.log("clickedCourse");
});
let students=[];
let clickedRecord;

//load data to the table
function loadTable(){
    $('#tableBody').empty();
    students.map((item,index)=>{
        var record= `<tr>
            <th scope="row" class="colID">${item.id}</th>
            <td class="colfname">${item.fname}</td>
            <td class="collName">${item.lname}</td>
            <td class="colAddress">${item.address}</td>
            <td class="colcName">${item.course}</td>
        </tr>`;
        $('#studenttable').append(record);

    });
}

//submit button
$('#submitBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();


    let student = new StudentModel(id,fname,laname,address,cName);
//     let student={
//     id:id,
//     fname:fname,
//     lname:laname,
//     address:address,
//     course:cName,
//     age:55,
//
//     call: ()=>{
//     console.log("saved");
// }
//
// }

    students.push(student);
    loadTable();
});
$('#tableBody').on('click','tr',function (){
    let index=$(this).index();
    clickedRecord=index;
    let fname=$(this).find(".colfname").text();
    let lname=$(this).find(".collName").text();
    let address=$(this).find(".colAddress").text();
    let id=$(this).find(".colID").text();
    let program=$(this).find(".colcName").text();
    console.log("clicked row "+ index);
    console.log("clicked id "+ id);
    console.log("clicked fName "+ fname);
    console.log("clicked lName "+ lname);
    console.log("clicked address "+ address);

    $('#studentId').val(id);
    $('#fName').val(fname);
    $('#lName').val(lname);
    $('#studentaddress').val(address);
    $(input[name="flexRadioDefault"][value={program}]).prop('checked', true);

});

//reset button
$('#resetBtn').on('click',()=>{
    $('#studentId').val("");
    $('#fName').val("");
    $('#lName').val("");
    $('#studentaddress').val("");
    $(input[name="flexRadioDefault"]).prop('checked', false);
});
//update student
$('#updateBtn').on('click',()=>{

    let id=$('#studentId').val();
    let fname=$('#fName').val();
    let laname=$('#lName').val();
    let address=$('#studentaddress').val();
    let cName =$('input[name="flexRadioDefault"]:checked').val();

    students[clickedRecord].fname=fname;
    students[clickedRecord].lname=laname;
    students[clickedRecord].address=address;
    students[clickedRecord].course=cName;
    loadTable();

});
//delete button
$('#deleteBtn').on('click',()=>{
    students.splice(clickedRecord, 1);
    loadTable();
});*/
