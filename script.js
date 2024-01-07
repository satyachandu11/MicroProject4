function addToDisplay(value){
    document.getElementById('display-input').value += value;
}

function clearDisplay(){
    document.getElementById('display-input').value = '';
}

function delValue(){

    let values = document.getElementById("display-input").value;
    let updatedText = values.slice(0, -1);

    document.getElementById("display-input").value = updatedText;
}

function calculate(){
    try{
        document.getElementById("display-input").value = eval(document.getElementById("display-input").value);
    } catch(error){
        document.getElementById("display-input").value = "Error";
    }
}