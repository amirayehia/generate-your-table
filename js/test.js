let rows = document.getElementById("rows");
let columns = document.getElementById("columns");
let num = 100;

function createTable(){
   document.getElementById("body").innerHTML = ""
   for(let i = 0 ; i <Number(rows.value); i++ ){
    var elementRow = document.createElement('tr');
    for(let j = 0 ; j <Number(columns.value) ; j++){
       let elementColumn = document.createElement('td')
       let text = document.createTextNode(generateRandomNum ());
       elementColumn.appendChild(text);
       elementRow.appendChild(elementColumn);


    }
    console.log(elementRow);
    document.getElementById("body").appendChild(elementRow);
    

}
clearTable()   

}

function generateRandomNum (){
     return Math.floor(Math.random()*100) 
}
function clearTable(){
  rows.value = "";
  columns.value = ""

}

