$(document).ready(function () {
    $("#HTML").click(function () {
        $("#HTML").css("background-color", "red")
        $("#content").text("Html viết tắt HyperText Markup Language");
        $("#PHP,#CSS,#JQUERY").css("background-color", "#ccc");
    })
    $("#CSS").click(function () {
        $("#CSS").css("background-color", "blue")
        $("#content").text("Thay đổi cách hiển thị mặc định của thẻ HTML");
        $("#PHP,#HTML,#JQUERY").css("background-color", "#ccc");
    })
    $("#JQUERY").click(function () {
        $("#JQUERY").css("background-color", "green")
        $("#content").text("Jquety là một thư viện của javascript");
        $("#PHP,#CSS,#HTML").css("background-color", "#ccc");
    })
    $("#PHP").click(function () {
        $("#PHP").css("background-color", "aqua")
        $("#content").text("PHP là một ngôn ngữ lập trình phía server");
        $("#HTML,#CSS,#JQUERY").css("background-color", "#ccc");
    })
})