var selected_module = "abhinay";
var select_module = function(x){
    selected_module = x;
    console.log(x)
}
console.log(selected_module)
window.onload = function() {
        var id = selected_module;
        switch(id) {
            case "chitra":
                document.getElementByClass('chitra').style.display = 'block';
                break;
            case "abhinay":
                document.getElementByClass('abhinay').style.display = 'block';
                break;
            case "sangeet":
                document.getElementByClass('sangeet').style.display = 'block';
                break;
            case "nrutya":
                document.getElementByClass('nrutya').style.display = 'block';
                break;
            case "camera":
                document.getElementByClass('camera').style.display = 'block';
                break;
            default:
                document.getElementByClass('abhinay').style.display = 'block';
        }
}