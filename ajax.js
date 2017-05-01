$(document).ready(function () {

  $('#step-2').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      // data: ,
      dataType: 'text'
    });
  });

  $('#step-3').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method:'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step3456').append(responseData);
    }).fail(function(){
      $('#step3456').append('sorry, I will try harder next time')
    });
  });


});


// $.ajax({
//   url: _____,
//   method: _____,
//   data: _____,
//   dataType: _____
// });

// http://first-ajax-api.herokuapp.com/
