// $(function() {

//     $('.offcanvas').on('click', function(){
//         $('.wrapper').toggleClass('open');   
//      });
// });

function toggle(){
var button = document.querySelector('#toggler-nav');

if(button.clicked == true){
document.querySelector('#toggler-nav').addEventListener('click', () => {
document.querySelector('#content').classList.add('open');
  });
}
else{
    document.querySelector('#content').classList.add('close'); 
}
}

toggle();
