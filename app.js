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
var down=0;
var turn=true;
var icon=document.getElementById("icon");


icon.addEventListener('click',()=>{
   search.value="";
})

// clode suggestion list when esc key pressed..............................
// window.addEventListener('keyup',function(event){
//    if(event.key=='Escape'){
//       console.log("press");
//       suggestion_hide.style.display = 'none';
//       search.blur();
//    }
// });

// for finding data.........................................................
search.addEventListener('keyup', function () {
   var input = search.value.toLowerCase();
   suggestionsList.innerHTML = '';
   
   if(event.key=='Escape'){
      // console.log("press");
      suggestion_hide.style.display = 'none';
      search.blur();
   }else{

         //fetching api data
      let api='https://www.oyorooms.com/api/amp/ampautocomplete?region=1&additionalFields=rating,supply,trending,tags,category&query='+input;
      fetch(api)
      .then((data) => {
         return data.json();
      })
      .then((actualdata) => {
         // console.log(actualdata);
         var response = actualdata.responseObject;
            setData(response);
         // console.log(response.length);
      })
      .catch((error) => {
         console.log("error");
      });
   }

      
   // if(event.key=='ArrowDown'){
   //    var children_list = document.getElementById('suggestion_show').children;
      
   //       console.log(children_list.div+" length");
   //       console.log(children_list);

   //    // if(down<=children_list.length && down>0){
   //    //    children_list[down-1].style.backgroundColor='white';
   //    //    children_list[down].style.backgroundColor='rgb(154, 141, 230)'
   //    //    down++;
   //    // }else if(down==0){
   //    //    children_list[down].style.backgroundColor='rgb(154, 141, 230)'
   //    // }
      
   // }else{
   //    down=0;
   // }
  
});

   function setData(response){
      suggestion_hide.style.display = 'block';

// add items in list.................................................
   response.forEach(function (suggested) {
         var div = document.createElement('div');
         div.textContent = suggested.displayName;
         suggestionsList.appendChild(div);
         document.getElementById('suggestion_show').appendChild(div)

         // console.log(suggested.terms[0]);
         // console.log(suggested.terms[1]);
      });

// click on element of list add into input.............................
         children_list = suggestion_hide.children;
         for (let i = 0; i < children_list.length; i++) {
            children_list[i].addEventListener('click', addIntoInput);
         }
   }

//close suggestion list when outside click.........................
// document.onclick = function (div) {
//    if (div.target.id != 'suggestion_show' && div.target != search) {
//       // console.log(div.target.id+" suggestion");
//    // console.log(div.target+" search");
//    // console.log(div+" search");

//       suggestion_hide.style.display = 'none';
//    }
// }

// For click outside close list..........................................
window.addEventListener('click',function(event){      
      suggestion_hide.style.display = 'none';
});


//for finding data.........................................................
// search.addEventListener('keyup', function () {
//    var input = search.value.toLowerCase();
//    suggestionsList.innerHTML = '';
//    // var find = false;

//    if (input.length >= 3) {
//       suggestion_hide.style.display = 'block';
//       const suggestions = [];

//check search item available in local storage or not........................
//       if (localStorage.getItem(input) != null) {
//          var obj = JSON.parse(localStorage.getItem(input));
//          var obj_keys = Object.values(obj);
//          for (var i = 0; i < obj.length; i++) {
//             suggestions[i] = obj[i];
//          }
//       }
//       else {

//check data in data object............................................
//          data.forEach(function (product) {
//             var a = product.name.toLowerCase().indexOf(input);
//             if (a == 0) {
//                suggestions.push(product.name);
//             }
//          });
//          if (suggestions.length != 0) {
//             localStorage.setItem(input, JSON.stringify(suggestions));
//          }
//       }


//add data in local storage .................for reference.................
// localStorage.setItem(input,JSON.stringify(suggestions));
// console.log(JSON.parse(localStorage.getItem(input)));
// console.log(JSON.parse(localStorage.getItem("input")));
// localStorage.clear();

//add items in list.................................................
// suggestions.forEach(function (suggested) {
//    var div = document.createElement('div');
//    div.textContent = suggested;
//    suggestionsList.appendChild(div);
//    document.getElementById('suggestion_show').appendChild(div)   
// });

//click on element of list add into input.............................
// children_list = suggestion_hide.children;

// for (let i = 0; i < children_list.length; i++) {
//    children_list[i].addEventListener('click', addIntoInput);
// }

// let k = 0;
// window.addEventListener('keyup', function (event) {
  //clode suggestion list when esc key pressed.........................
//    if (event.key == 'Escape') {
//       suggestion_hide.style.display = 'none';
//       search.blur();
//    }

//    if (event.key == 'ArrowDown' && k < children_list.length) {
      // if(k>0){
      //    // console.log(children_list[k-1].textContent);
      //    children_list[k-1].className='notselect';
      //    // console.log(children_list[k-1].className+" after");
      //    // console.log("enter");
      // }      
      // console.log(k+" =k");

      // for(let i=0;i<children_list.length;i++){
      //    children_list[i].style.backgroundColor='white';
      // }
      // children_list[k].style.backgroundColor='rgb(154, 141, 230)';
      // console.log(k);

      // children_list[k].className='select';
   //    k++;
   // } else {
   //    k = 0;
   // }

// });

//    } else {
// }
// });

// add data into input box
function addIntoInput() {
   search.value = this.textContent;
   suggestion_hide.style.display = 'none';
}









