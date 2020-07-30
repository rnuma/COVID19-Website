$(document).ready(function(){
    $('.header0').height($(window).height());
  })


  $(document).ready(function(){
    $('.header1').height($(window).height());
  })


  $(document).ready(function(){
    $('.header2').height($(window).height());
  })


  $(document).ready(function(){
    $('.header3').height($(window).height());
  })

  
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
  });


  (function(){
    emailjs.init('user_RMlDaNXUwz3bTmEpyhyJb');
 })();


 window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('contact_service', 'contact_form', this);
  });
}