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
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method:'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step3456').append(responseData);
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
