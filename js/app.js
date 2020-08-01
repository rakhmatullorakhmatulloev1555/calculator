
function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num; 
}
// Функция очистки 
function clean() {
    document.form.textview.value = "";
}
// Функция назад
function back() {
    let exp =  document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);   
}

function equal() {
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
    
}