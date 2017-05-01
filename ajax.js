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
      console.log('Request Successful');
      $('#step3456').append(responseData);
    }).fail(function(){
      $('#step3456').append('sorry, I will try harder next time')
      console.log('Request Failed');
    }).always(function(){
      console.log('Request may or may not have been Successful');
    });
  });

  $('#step-7').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      // data: ,
      dataType: 'text'
    }).done(function(responseData){
      console.log('Request Successful');
      $('#step7').append(responseData);
    });
  });

  $('#step-8').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method:'GET',
      data: { timezone: 'Europe/Sofia' },
      dataType: 'text'
    }).done(function(responseData){
      $('#step8').append(responseData);
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
