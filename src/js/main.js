// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

var $ = require('jquery');

$('.tab').css("visibility","hidden");

// $('.tab').hide();

$( ".header" ).click(function() {
  $('.tab').css("visibility","hidden");
  // $('.tab').hide();
  $('.header').css("background-color","#efefef");
  $(this).css("background-color","rgb(24, 161, 205)");
  var thisID = $(this).attr('id');
  thisID = thisID + "Div";

  $('#tabCon').find(`#${thisID}`).css("visibility","inherit");

  var thisHeight = $('#tabCon').find(`#${thisID}`).height();
  $('figcaption').css('margin-top', (thisHeight + 30));
  // $('#tabCon').find(`#${thisID}`).show();
});

$('#tabCon').find(`#overviewDiv`).css("visibility","inherit");
$('#overview').css("background-color","rgb(24, 161, 205)");
var yay = $('#tabCon').find('#overviewDiv').height();
$('figcaption').css('margin-top', (yay + 20));
