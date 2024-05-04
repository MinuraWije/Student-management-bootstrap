import {studentModel} from "./studentModel.js"

var students = [];

$('#student-section').css({display: 'block'});
$('#course-section').css({display: 'block'});

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

$('#student-submit').on('click',() => {
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


    let student = studentModel(studentId,studentFirstName,studentLastName,studentAddress,program);
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
});

/*$('#student-table-body tr').on('click',() => {
    console.log("I'm tr");
});*/

$('#student-table-body').on('click','tr', function () {  //event delegation
    let index = $(this).index();
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