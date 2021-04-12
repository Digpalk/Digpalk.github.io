var data=[{
    type: 'mobile',
    name: 'iPhone 5'
 },
 {
    type: 'mobile',
    name: 'iPhone 6s'
 },
 {
    type: 'mobile',
    name: 'iPhone 11'
 },
 {
    type: 'mobile',
    name: 'iPhone 7'
 },
 {
    type: 'mobile',
    name: 'Samsung'
 },
 {
    type: 'clothes',
    name: 'Jeans'
 },
 {
    type: 'accessories',
    name: 'bucket'
 }];

var search=document.querySelector('.searchinput');
var suggestionsList = document.querySelector('.suggestion');

search.addEventListener('keyup',function(){
    // console.log(search.value);
    var input = search.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if(input.length>=3){
    const suggestions=[];
    data.forEach(function(product){
       
     var a=product.name.toLowerCase().indexOf(input);
        //  console.log(a); 
        //  console.log(product.name); 
         if(a==0){
            // console.log(product.name); 
            suggestions.push(product.name);
            // return product.name;
        }
    });

    // console.log(suggestions); 
      suggestions.forEach(function(suggested) {
        const div = document.createElement('div');
        // console.log(suggested); 
        div.innerHTML = suggested;
        suggestionsList.appendChild(div);
      });

    }else{
        // if (input === '') {
            // suggestionsList.innerHTML = '';  
        //   }
    }

});