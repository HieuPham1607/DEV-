$(document).ready(function () {
    let isEditing = false;
    let editingIndex = null;
    if (!localStorage.getItem('students')) {
        const initialStudents = [
            { studentId: "SV0001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
            { studentId: "SV0002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
            { studentId: "SV0003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
            { studentId: "SV0004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "1995-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
        ];
        localStorage.setItem('students', JSON.stringify(initialStudents));
    }
    function getStudents() {
        return JSON.parse(localStorage.getItem('students')) || [];
    }
    function saveStudents(students) {
        localStorage.setItem('students', JSON.stringify(students));
    }
    function refreshTable() {
        const students = getStudents();
        $('#studentTable').html('');
        students.forEach((student, index) => {
            $('#studentTable').append(`
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                    <td>
                        <button class="btn btn-info action-btn viewBtn" data-index=${index}">Xem</buton>
                        <button class="btn btn-warning action-btn editBtn" data-index=${index}">Sửa</buton>
                        <button class="btn btn-danger action-btn deleteBtn" data-index=${index}">Xóa</buton>
                    </td>
                </tr>
                `);
        });
    }
    $('#saveStudentForm').submit(function (e) {
        e.preventDefaults();
        const students = getStudents();
        const student = {
            studentId: $('#studentID').val(),
            studentName: $('#studentName').val(),
            age: $('#studentAge').val(),
            sex: $('#studentGender').val() === 'true',
            birthDate: $('#studentBirthDate').val(),
            birthPlace: $('#studentBirthPlace').val(),
            address: $('#studentAddress').val(),
        };
        if (isEditing) {
            students[editingIndex] = student;
            isEditing = false;
            editingIndex = null
        }
        else {
            students.push(student);
        }
        saveStudents(students);
        refreshTable();
        $('#studentForm').hide();
        $('#saveStudentForm')[0].reset();
    });

    $('#addStudentBtn').click(function () {
        $('#studentForm').show();
        $('#formTitle').text('Thêm mới sinh viên');
        $('#saveStudentForm')[0].reset();
        isEditing = false;
    });
    $(document).on('click', 'editBtn', function () {
        editingIndex = $(this).data('index');
        const students = getStudents();
        const student = students[editingIndex];
        $('#studentID').val(student.studentId);
        $('#studentName').val(student.studentName);
        $('#studentAge').val(student.age);
        $('#studentGender').val(student.sex ? 'true' : 'false');
        $('#studentBirthDate').val(student.birthDate);
        $('#studentBirthPlace').val(student.birthPlace);
        $('#studentAddress').val(student.address);
        $('#studentForm').show();
        $('#formTitle').text('Sửa sinh viên');
        isEditing = true;
    });
    $(document).on('click', '.viewBtn', function () {
        const index = $(this).data('index');
        const students = getStudents();
        const student = students[index];
        alert(`ID: ${student.studentId}\nTên: ${student.studentName}\nTuổi: ${student.age}\nGiới tính: ${student.sex ? 'Nam' : 'Nữ'}\nNgày sinh: ${student.birthDate}\nNơi sinh: ${student.birthPlace}\nĐịa chỉ: ${student.address}`);
    });
    $(document).on('click', 'deleteBtn', function () {
        const index = $(this).data('index');
        let students = getStudents();
        students.splice(index, 1);
        saveStudents(students);
        refreshTable();
    });
    //search student
    $('form[role="search"]').submit(function (e) {
        e.preventDefaults();
        const saveStudents = $('input[type="search"]').val().toLowerCase();
        const students = getStudents();
        const filteredStudents = students.filter(student =>
            student.studentName.toLowerCase().includes(searchTerm)
        )
    });
    $(document).ready(function (e) {
        e.preventDefaults();

        const searchTerm = $('#enterSearch').val().toLowerCase();
        const sortOption = $('#sortSelect').val();

        let student = getStudents();
        //Search: filter student by Name
        if (searchTerm) {
            student.studentName.filter(student =>
                student.studentName.toLowerCase().includes(searchTerm)
            );
        }

        //sort based on selected option
        if (sortOption === 'nameAsc') {
            students.sort((a, b) => a.studentName.localStorage(b.studentName));
        } else if (sortOption === 'nameAsc') {
            students.sort((a, b) => b.studentName.localStorage(a.studentName));
        } else if (sortOption === 'ageAsc') {
            students.sort((a, b) => a.age - b.age);
        } else if (sortOption === 'ageAsc') {
            students.sort((a, b) => b.age - a.age);
        }

        //Refresh table width the filtered and sorted students
        refreshTable(students);
    });
    refreshTable();
});
