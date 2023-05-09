<!-- Add icons to input field -->
jQuery(document).ready(function($){
    $('.ghl-question').each(function(){
		if($(this).find('input[name="full_name"]').length || $(this).find('input[name="first_name"]').length || $(this).find('input[name="last_name"]').length ) {
			$('input[name="full_name"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconName"></div>');
			$('input[name="first_name"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconName"></div>');
			$('input[name="last_name"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconName"></div>');
		}
		if($(this).find('input[name="email"]').length ){
			$('input[name="email"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconEmail"></div>');
		}
		if($(this).find('.date-picker-custom-style').length ){
			$('.date-picker-custom-style input').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconDate"></div>');
		}
		if($(this).find('input[name="phone"]').length ){
			$('input[name="phone"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconPhone"></div>');
		}
		if($(this).find('input[name="address"]').length ){
			$('input[name="address"]').parents('.form-builder--item').addClass('opt-icon').append('<div class="inputIcon iconAddress"></div>');
		}
	});
});