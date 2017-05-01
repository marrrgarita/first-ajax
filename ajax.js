$(document).ready(function () {

  $('#step-2').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      // data: ,
      dataType: 'text'
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
