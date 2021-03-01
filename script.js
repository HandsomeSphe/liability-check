
var totalBill = [];
var totalExpense = [];
var expense = function(amount, description, value, id){
           this.amount = amount;
           this.description = description;
           this.value = value;
           this.id = id;
           
};
 
document.addEventListener("keypress", function(event){

 if(document.querySelector(".top__description--actual").value.length > 0 && document.querySelector(".top__description--number").value.length>0 && document.querySelector(".top__value--actual").value.length){

    if(event.keyCode === 13 || event.which === 13){

        var description = document.querySelector(".top__description--actual").value;
        var amount = document.querySelector(".top__description--number").value;
        var value = document.querySelector(".top__value--actual").value;

        if(totalExpense.length > 0){
            id = (totalExpense.length - 1) + 1;
        }else{
            id = 0;
        }
      
           var bill = new expense(amount, description, value, id);
           console.log(bill);
           totalBill.push(value);
           totalExpense.push(bill);
           console.log(totalBill);
           console.log(totalExpense);

           function calculator(total, num){
            return parseInt(total) + parseInt(num);
             }
           var results = totalBill.reduce(calculator);
           document.querySelector(".total__output").innerHTML = "R " + results;
            putInsideText();
           init();
           document.querySelector(".top__description--actual").focus();
           //press();
    }
 }
})
var init = function(){
    document.querySelector(".top__description--actual").value = "";
    document.querySelector(".top__description--number").value = "";
    document.querySelector(".top__value--actual").value = "";
};

var putInsideText = function(){
    // create a html string
    var html = '<li><div class="sorter sorter-%number%"><div class="listi__amount">%amount%</div><div class="listi__description">%description%</div><div class="listi__price">%value%</div><svg class="listi__icon"><use xlink:href="./images/SVG/sprite.svg#icon-bin"></use></svg></div></li>'
     // generate a new Id

    // replace placeholders with real data
    
   

    newHtml = html.replace('%amount%', document.querySelector(".top__description--number").value);
    newHtml = newHtml.replace('%description%', document.querySelector(".top__description--actual").value);
    newHtml = newHtml.replace('%value%', "R" + document.querySelector(".top__value--actual").value);
    newHtml = newHtml.replace('%number%', id);


    // insert new html in the DOM
    document.querySelector(".myList").insertAdjacentHTML("beforeend", newHtml);   
   
    
};








