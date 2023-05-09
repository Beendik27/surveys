jQuery(document).ready(function($){
var popwidth = $('#hl_main_popup').width();
if ($('#hl_main_popup').width() == 900 ){
  $('.ghl-survey-form').addClass('fullwidth');
} else if ($('#hl_main_popup').width() == 660 ){
  $('.ghl-survey-form').addClass('medium');
} else if ($('#hl_main_popup').width() == 490 ){
  $('.ghl-survey-form').addClass('small');
}
});