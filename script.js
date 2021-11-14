$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
   
  });
    
 
var typed = new Typed(".typing",{
  strings : ["Mechanical Engineer", "ABAP Developer" ,"Full-Stack Developer","ML Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})


  $('.menu-button').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-button i').toggleClass("active");
      
  })
});


