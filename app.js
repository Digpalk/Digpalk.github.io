var data = [{
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

var search = document.querySelector('.searchinput');
var suggestionsList = document.querySelector('.suggestion');

search.addEventListener('keyup', function () {
   // console.log(search.value);
   var input = search.value.toLowerCase();
   suggestionsList.innerHTML = '';
   // var find = false;

   if (input.length >= 3) {
      const suggestions = [];

      if (localStorage.getItem(input)!=null) { 
         var obj=JSON.parse(localStorage.getItem(input));
         // console.log(JSON.parse(localStorage.getItem(input)));
         // console.log((localStorage.getItem(input)).split(" "));
         // console.log(typeof(Object.keys(obj)));
         var obj_keys=Object.values(obj);
         // console.log(typeof(obj_keys));
         
         for(var i=0;i<obj.length;i++){
            suggestions[i]=obj[i];
         }
         //  console.log("local storage");
      }
      else {
         //  console.log("data object");
         //check data in data object
         data.forEach(function (product) {
            var a = product.name.toLowerCase().indexOf(input);
            if (a == 0) {
               suggestions.push(product.name);
            }
         });
         if(suggestions.length != 0){
            localStorage.setItem(input,JSON.stringify(suggestions));
         }
         
      }


      //add data in local storage
      // localStorage.setItem(input,JSON.stringify(suggestions));
      // console.log(JSON.parse(localStorage.getItem(input)));
      // console.log(JSON.parse(localStorage.getItem("input")));
      // localStorage.clear();
      //  console.log(suggestions); 

      //add items in list
      suggestions.forEach(function (suggested) {
         const div = document.createElement('div');
         // console.log(suggested); 
         div.innerHTML = suggested;
         suggestionsList.appendChild(div);
      });

   } else {
      // if (input === '') {
      // suggestionsList.innerHTML = '';  
      //   }
   }

});