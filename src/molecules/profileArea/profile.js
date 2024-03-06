const profileJquery= ()=>{
var $;
$ = require('jquery');
$(function(){
  console.log('Profile-Jquery');
  $('#profile-image-id').hover(function(){
    
    $('.profile-info').fadeToggle(300);
  
  })
  
  
  })
}
export default profileJquery;