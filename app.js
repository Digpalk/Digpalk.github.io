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
var suggestion_hide = document.getElementById('suggestion_show');
var children_list;

//close suggestion list when outside click
// document.onclick = function (div) {
//    // if (div.target.id != 'suggestion_show' && div.target != search) {
//       console.log(div.target.id+" suggestion");
//    // console.log(div.target+" search");
//    console.log(div+" search");
      
//       // suggestion_hide.style.display = 'none';
//    // }
// }
document.addEventListener('click',function(event){      
      suggestion_hide.style.display = 'none';
});

//clode suggestion list when esc key pressed
window.addEventListener('keyup',function(event){
   if(event.key=='Escape'){
      suggestion_hide.style.display = 'none';
      search.blur();
   }
});

//for finding data
search.addEventListener('keyup', function () {
   var input = search.value.toLowerCase();
   suggestionsList.innerHTML = '';
   // var find = false;

   if (input.length >= 3) {
      suggestion_hide.style.display = 'block';
      const suggestions = [];

      //check search item available in local storage or not
      if (localStorage.getItem(input) != null) {

         var obj = JSON.parse(localStorage.getItem(input));
         var obj_keys = Object.values(obj);
         for (var i = 0; i < obj.length; i++) {
            suggestions[i] = obj[i];
         }
      }
      else {
         //check data in data object
         data.forEach(function (product) {
            var a = product.name.toLowerCase().indexOf(input);
            if (a == 0) {
               suggestions.push(product.name);
            }
         });
         if (suggestions.length != 0) {
            localStorage.setItem(input, JSON.stringify(suggestions));
         }
      }


      //add data in local storage
      // localStorage.setItem(input,JSON.stringify(suggestions));
      // console.log(JSON.parse(localStorage.getItem(input)));
      // console.log(JSON.parse(localStorage.getItem("input")));
      // localStorage.clear();

      //add items in list
      suggestions.forEach(function (suggested) {
         var div = document.createElement('div');
         div.textContent = suggested;
         // div.textContent=suggested;
         // div.innerHTML= `
         // <p> ${suggested} </p> 
         // `;
         suggestionsList.appendChild(div);
         document.getElementById('suggestion_show').appendChild(div)   
      });

      //click on element of list add into input 
       children_list=suggestion_hide.children;

       for(let i=0;i<children_list.length;i++){
         children_list[i].addEventListener('click',addIntoInput);
      }
      // console.log(children_list);

      let k=0;
      window.addEventListener('keyup',function(event){
         if(event.key== 'ArrowDown' && k<children_list.length){
                  if(k>1){
                     console.log(children_list[k-1].className+" before");
                     // children_list[k-2].className='notselect';
                     console.log(children_list[k-1].className+" after");
                     // console.log("enter");
                  }
               console.log(k+" =k");
            children_list[k].className='select';
            k++; 
         }    
             
      });

   } else {
   }
});


function addIntoInput(){
   search.value=this.textContent;
}
// suggestionsList.addEventListener('click',function(element){
//       // console.log(element);
// });








