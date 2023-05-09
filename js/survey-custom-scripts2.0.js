// Popup form responsive style
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
// Add classes to the option radio and input field
jQuery(document).ready(function($){
    var i = 0;
    var n = $('.ghl-question').length;
    $('.ghl-question').each(function(){
		var this_question = $(this);
        i++;
        var this_val =  $(this).val();
        if($(this).find('input[name="first_name"]').length && $(this).find('input[name="last_name"]').length ){
			$(this).addClass('ipt-text');
			$('input[name="first_name"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
			$('input[name="last_name"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
        } else if($(this).find('input[name="address"]').length && $(this).find('input[name="city"]').length && $(this).find('input[name="state"]').length && $(this).find('input[name="postal_code"]').length ){
			$(this).addClass('ipt-text');
			$('input[name="address"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
			$('input[name="city"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
			$('input[name="state"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
			$('input[name="postal_code"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
        } else if($(this).find('input[name="address"]').length && $(this).find('input[name="city"]').length && $(this).find('input[name="state"]').length ){
			$(this).addClass('ipt-text');
			$('input[name="address"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-full');
			$('input[name="city"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-col');
			$('input[name="state"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-col');
        } else {}
		
		this_question.find('.menu-field-wrap').each(function(){
			if($(this).find('input[value="Yes"]').length && $(this).find('input[value="No"]').length && $(this).find('input[type="radio"]').length === 2 ){
				$(this).addClass('opt-button');
				$('input[value="Yes"]').parents('.opt-button .option-radio').addClass('opt-length opt-odd');
				$('input[value="No"]').parents('.opt-button .option-radio').addClass('opt-length opt-even');
			}
		});
    });
});
// Add classes to spinner container
jQuery(document).ready(function($){
    $('html').on('click', 'input[value="Submit"]', function(e){
		$('.v-spinner').parent('.ghl-btn-submit div').addClass('v-spinner-container');
    });
});