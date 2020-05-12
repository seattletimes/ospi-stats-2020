// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

var $ = require('jquery');

$('.tab').css("visibility","hidden");

$( ".header" ).click(function() {
  $('.tab').css("visibility","hidden");
  $('.header').css("background-color","#efefef");
  $(this).css("background-color","rgb(24, 161, 205)");
  thisID = $(this).attr('id');
  thisID = thisID + "Div";

  $('#tabCon').find(`#${thisID}`).css("visibility","inherit");

});

$('#tabCon').find(`#childDiv`).css("visibility","inherit");
$('#child').css("background-color","rgb(24, 161, 205)")
