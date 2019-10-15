
var pw = "CodesePreweb02!";

var character = /[a-z]/;
var number = /([0-9]{2})/;
var print = /.*[A-Z].*[A-Z].*[A-Z]/;
var symbol = /[!@#$%^&*]/;

if (!character.test(pw)) {
    console.log("Chứa ít nhất 1 ký tự")
}
if (!number.test(pw)) {
    console.log("Chứa ít nhất 2 số 0-9")
}
if (!print.test(pw)) {
    console.log("Chứa ít nhất 3 ký tự in hoa từ A-Z")
}
if (!symbol.test(pw)) {
    console.log("Chỉ chứa 1 ký tự đặc biệt")
}