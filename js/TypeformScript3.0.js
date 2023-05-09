var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
jq.onload=init_survey;
document.getElementsByTagName('head')[0].appendChild(jq);
//hide_steps = false;
//hide_previous = false;
oldVue=false;
// this is for backward compatibility. 
// in case someone has the survey-step-num.js included. We don't want it to fire.
function init_survey() {
    if (window.hasOwnProperty('hide_progress_bar') && hide_progress_bar) {
        css = '<style>.progress-bar { display:none !important; }</style>';
      jQuery('head').append(css);     
    }
    if (window.hasOwnProperty('hide_steps') && hide_steps){
        css = '<style>.step { display:none !important; }</style>';
        jQuery('head').append(css);    
    }
    if (window.hasOwnProperty('hide_previous') && hide_previous){
        css = '<style>.ghl-prev-button { display:none !important; } #_builder-form .ghl-button-bar .ghl-next-button, #_builder-form .ghl-button-bar .ghl-submit-button { width: 100% !important; border-left: 0px !important} .hl-app #_builder-form .ghl-footer, .ghl-footer { max-width: 160px; } #_builder-form .ghl-button-bar .ghl-submit-button { padding: 15px 10px 15px 15px !important; text-align: center; }</style>';
        jQuery('head').append(css);    
    }
    if (window.hasOwnProperty('show_check') && show_check){
        css = '<style>#_builder-form .option-radio label::before { content:"\\f00c" !important; font-family: FontAwesome; } #_builder-form .option label::before { content:"\\f00c" !important; font-family: FontAwesome; }</style>';
        jQuery('head').append(css);    
    } else {
        css = '<style>#_builder-form .ghl-question-set { content:"" !important;}</style>';
        jQuery('head').append(css);    
    }
    if (window.hasOwnProperty('fixed_height') && fixed_height){
        css = '<style>#_builder-form .ghl-question-set { max-height:auto; min-height:auto;}</style>';
        jQuery('head').append(css);    
    } else {
        css = '<style>#_builder-form .ghl-question-set { max-height:none; min-height:none; }</style>';
        jQuery('head').append(css);    
    }
    
    if (document.querySelectorAll('.hl-app').length>1) {
        document.querySelectorAll('.c-survey .hl-app').forEach(function(hl_survey) {
            build_survey(hl_survey);
        });
    } else {
            build_survey(document.querySelector('.hl-app'));
    }
}
   /* Build Survey Function Called In a Loop at End for each survey*/
function build_survey(hl_survey) {
    
    /* Survey Slide */
	window.setTimeout(function() {
		if (jQuery('.ghl-progress-bar-inner-div.item-0').hasClass('active')) {
        	jQuery('#_builder-form.ghl-survey-form').addClass('firstSlide');
        }
        jQuery('#_builder-form .ghl-question.address-type').each(function(){
			jQuery(hl_survey).find('.ghl-question.address-type .form-builder--item.form-builder--item-input').append('<button type="button" class="custom-btn btn btn-dark">Find Out</button>');
		});
	}, 500);
    
    /* Survey option radio */
	document.body.onkeydown = function (e) {
        if (!e.target.matches('input,textarea'))
        {
        if (e.keyCode == 65) // a
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, ghl-page-current .in-r-c input')[0].click();
        if (e.keyCode == 66) // b
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[1].click();
        if (e.keyCode == 67) // c
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[2].click();
        if (e.keyCode == 68) // d
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[3].click();
        if (e.keyCode == 69) // e
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[4].click();
        if (e.keyCode == 70) // f
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[5].click();
        if (e.keyCode == 71) // g
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[6].click();
        if (e.keyCode == 72) // h
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[7].click();
        if (e.keyCode == 73) // i
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[8].click();
        if (e.keyCode == 74) // j
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[9].click();
        if (e.keyCode == 75) // k
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[10].click();
        if (e.keyCode == 76) // l
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[11].click();
        if (e.keyCode == 77) // m
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[12].click();
        if (e.keyCode == 78) // n
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[13].click();
        if (e.keyCode == 79) // o
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[14].click();
        if (e.keyCode == 80) // p
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[15].click();
		}
    };
    
    jQuery('.ghl-question').each(function(){
        if(jQuery(this).height() >= 700 ){
            jQuery(this).addClass('maxed');
        }
        setTimeout(function(){
            var qheight = jQuery('.ghl-question-set').height();
            var fwrap = jQuery('.ghl-form-wrap');
            if( qheight >= 900 ){
                    jQuery(fwrap).addClass('maxed');
            } else if( qheight <= 899 ){
                    jQuery(fwrap).removeClass('maxed');
            }
	    }, 800);
    })
	
	jQuery(hl_survey).on('click', 'button[type="button"]', function(){
	    setTimeout(function(){
            var qheight = jQuery('.ghl-question-set').height();
            var fwrap = jQuery('.ghl-form-wrap');
            if( qheight >= 900 ){
                    jQuery(fwrap).addClass('maxed');
            } else if( qheight <= 899 ){
                    jQuery(fwrap).removeClass('maxed');
            }
	    }, 800);
    });
	
    
	jQuery(hl_survey).on('input', '.option-radio input[type="radio"]', function(e){
		e.preventDefault();
		hlapp = $(this).closest('.hl-app')[0].__vue__;
		var thisID = jQuery(this).attr('id');
		jQuery(this).attr('checked', 'checked');
		jQuery(this).prop("checked", true);
		jQuery('.ghl-page-current label.checked').removeClass('checked');
		jQuery('label[for="' + thisID + '"]').addClass('checked');
		setTimeout(function(){
            var qheight = jQuery('.ghl-question-set').height();
            var fwrap = jQuery('.ghl-form-wrap');
            if( qheight >= 900 ){
                    jQuery(fwrap).addClass('maxed');
            } else if( qheight <= 899 ){
                    jQuery(fwrap).removeClass('maxed');
            }
	    }, 800);
	});
	
    jQuery(hl_survey).on('submit', 'form[name="builder-form"]', function(e){
		e.preventDefault();
   		hl_submit();				
	});
    
    /* Survey continue button */
	jQuery(hl_survey).on('click', '.continue-btn', function(){
		jQuery('button[aria-label="Next Button"]').trigger('click');
	});
               
    listenForSlideChange(hl_survey);
    addStepNumbers(hl_survey);
        /* Survey Slide */
        if (oldVue)
            jQuery(hl_survey).on('input', '.option-radio input[type="radio"]', function(e){
                // this necessary for the old style.
                e.preventDefault();
                var thisID = jQuery(this).attr('id');
                jQuery(this).attr('checked', 'checked');
                jQuery(this).prop("checked", true);
                jQuery('.ghl-page-current label.checked').removeClass('checked');
                jQuery('label[for="' + thisID + '"]').addClass('checked');
            });
        /* we removed the whole hl_submit() function because it's not possible with new surveys */
        
        /* Survey continue button */

		jQuery(hl_survey).on('click', '.continue-btn', function(){
			jQuery('button[aria-label="next button"]').trigger('click');
		});
		jQuery(hl_survey).on('click', '.custom-btn', function(){
			jQuery('button[aria-label="next button"]').trigger('click');
		});
		jQuery(hl_survey).on('click', 'button[aria-label="next button"]', function(){
			var inputAddress = jQuery('.googleaddress');
            jQuery(inputAddress).each(function(i, e) {
                jQuery('.location').text(jQuery(e).val());
            });
		});
    
        if (document.querySelectorAll('#surveystyles').length<=0)
        {
            css = '.alert.alert-danger ul li:not(:first-child) {display:none;}';
            jQuery('head').append('<style id="surveystyles">'+css+'</style>');                
        }
        // REMOVED THE OUR OWN PREV AND NEXT BUTTONS
        
        var maxFont = 30;
        var minFont = 29;
        jQuery('#_builder-form .ghl-question .form-builder--item h1').each(function (index) {
            var font = jQuery(this).css('font-size');
            if ( font > '30px' ) {
                jQuery(this).addClass('lgFont');
            }
            if ( font < '30px' ) {
                jQuery(this).addClass('smFont');
            }
        });
        
        /* Add classes to the option radio and input field */

		var i = 0;
			var n = jQuery(hl_survey).find('.ghl-question').length;
			jQuery(hl_survey).find('.ghl-question').each(function(){
				var this_question = jQuery(this);
				i++;
				var this_val =  jQuery(this).val();
				if(jQuery(this).find('input[name="first_name"]').length && jQuery(this).find('input[name="last_name"]').length ){
					jQuery(this).addClass('ipt-text');
					jQuery('input[name="first_name"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
					jQuery('input[name="last_name"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
				} else if(jQuery(this).find('input[name="address"]').length && jQuery(this).find('input[name="city"]').length && jQuery(this).find('input[name="state"]').length && jQuery(this).find('input[name="postal_code"]').length ){
					jQuery(this).addClass('ipt-text');
					jQuery('input[name="address"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
					jQuery('input[name="city"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
					jQuery('input[name="state"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
					jQuery('input[name="postal_code"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
				} else if(jQuery(this).find('input[name="address"]').length && jQuery(this).find('input[name="city"]').length && jQuery(this).find('input[name="state"]').length ){
					jQuery(this).addClass('ipt-text');
					jQuery('input[name="address"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-full');
					jQuery('input[name="city"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-col');
					jQuery('input[name="state"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-col');
				} else {}

				var empty = true;
				this_question.find('.menu-field-wrap').each(function(){
        			if(jQuery(this).find('input[value="Continue"]').length && jQuery(this).find('input[type="radio"]').length === 1 ){
        				jQuery(this).addClass('opt-button');
        			}
        		});
        		this_question.find('.fields-container').each(function(){
        			if(jQuery(this).find('input.form-control[type="text"]').length === 1 ){
        				jQuery(this).append('<div class="pr-enter"><span><strong>press Enter </strong><small>↵</small></span></div>');

        			}
        		});
				this_question.find('.menu-field-wrap').each(function(){
        			if(jQuery(this).find('input[value="1 Star"]').length && jQuery(this).find('input[value="2 Star"]').length && jQuery(this).find('input[value="3 Star"]').length && jQuery(this).find('input[value="4 Star"]').length && jQuery(this).find('input[value="5 Star"]').length && jQuery(this).find('input[type="radio"]').length === 5 ){
        				jQuery(this).addClass('opt-star');
        				jQuery('input[value="1 Star"]').parents('.option-radio').addClass('star');
        				jQuery('input[value="2 Star"]').parents('.option-radio').addClass('star');
        				jQuery('input[value="3 Star"]').parents('.option-radio').addClass('star');
        				jQuery('input[value="4 Star"]').parents('.option-radio').addClass('star');
        				jQuery('input[value="5 Star"]').parents('.option-radio').addClass('star');
        				jQuery('input[value="5 Star"]').siblings('label.checked').parents('.option-radio').addClass('starred');
        			}
        		});
                jQuery('html').on('click', '.option-radio.star input[type="radio"]', function(){
            		jQuery(this).parents('.option-radio').find('div').children('label').addClass('starred');
            		jQuery(this).parents('.option-radio').prevAll().find('div').children('label').addClass('starred');
            		jQuery(this).parents('.option-radio').nextAll().find('div').children('label').removeClass('starred');
            	});
				this_question.find('.menu-field-wrap').each(function(){
					if(jQuery(this).length === 1 ){
						jQuery(this).addClass('only-question');
					}
					if(jQuery(this).find('input[value="Yes"]').length && jQuery(this).find('input[value="No"]').length && jQuery(this).find('input[type="radio"]').length === 2 ){
						jQuery(this).addClass('opt-button');
						jQuery('input[value="Yes"]').parents('.opt-button .option-radio').addClass('opt-length opt-odd');
						jQuery('input[value="No"]').parents('.opt-button .option-radio').addClass('opt-length opt-even');
					}
					if(jQuery(this).find('input[type="text"]').length ){
						jQuery('input[type="text"]').parents('.option-radio').addClass('custom-value');
					}
					if(jQuery(this).find('input[name="address"]').length ){
						jQuery(this).parents('.ghl-question').addClass('address-type');
					}
				});
			});
        
        // Insert Progress Bar
			
        jQuery(hl_survey).find('.ghl-survey-form').each(function(){
            jQuery(this).append('<div id="progress_bar" class="progress-bar"></div>');
        });
        var count = 0;
        currentSlideIndex=findCurrentIndex(hl_survey);
        jQuery(hl_survey).find('.ghl-question').each(function(){
            // add the progres bar cells
            jQuery(this).attr('data-count', count);
            jQuery(hl_survey).find('.ghl-progress-bar-background').append('<div class="ghl-progress-bar-inner-div item-' + count + '"><div class="progress-item"></div></div>');
            count++;
            jQuery(hl_survey).find('.item-' + currentSlideIndex).addClass('active');
        });
        
    
        if ($('#hl_main_popup').width() == 900 ){
          $('.ghl-survey-form').addClass('fullwidth');
        } else if ($('#hl_main_popup').width() == 660 ){
          $('.ghl-survey-form').addClass('medium');
        } else if ($('#hl_main_popup').width() == 490 ){
          $('.ghl-survey-form').addClass('small');
        }
        
        jQuery(hl_survey).find('.ghl-progress-bar').each(function(){
			jQuery(this).addClass('jtform');
		});
		
		jQuery('.ghl-question').prepend('<div class="location"></div');
        
        var i = 0;
		var n = jQuery(hl_survey).find('.ghl-question').length;
		jQuery(hl_survey).find('.ghl-question').each(function() {
			i++;
			this.classList.add('fm-steps'+i);
		});
		
}

function listenForSlideChange(hl_survey) {
    // create a mutationObserver that listens for changes inside of .ghl-question-set
    const observer = new MutationObserver((mutations) => {
        currentSlideIndex=findCurrentIndex(hl_survey);
        jQuery(hl_survey).find('.ghl-progress-bar-inner-div').removeClass('active');
        jQuery(hl_survey).find('.item-' + currentSlideIndex).addClass('active');
        if (jQuery('.ghl-progress-bar-inner-div.item-0').hasClass('active')) {
        	jQuery('#_builder-form.ghl-survey-form').addClass('firstSlide');
        } else {
            jQuery('#_builder-form.ghl-survey-form').removeClass('firstSlide');
        }
        
     });
     observer.observe(document.querySelector('.ghl-question-set'), {
        childList: true,
        subtree: true,
        attributes: true, 
     });
}
function findCurrentIndex(hl_survey) {
    // find index of current step in .ghl-question
    index=0;
    var currentIndex = 0;
    hl_survey.querySelectorAll('.ghl-question').forEach(function(el) {
        if (el.classList.contains('ghl-page-current')) {
            currentIndex = index;
        }
        index++;
    });
    return currentIndex;
}
function addStepNumbers(hl_survey) {
         // add the Step # of # to the top of the survey
    if (!window.hasOwnProperty('step_name'))
         step_name = 'Question';
    if (document.getElementById('jstp')) 
        step_name = document.getElementById('jstp').getAttribute('step');
    i=0;
    hl_survey.querySelectorAll('.ghl-question').forEach(function(el) {
        i++;
        total_steps = hl_survey.querySelectorAll('.ghl-question').length;
        el.insertAdjacentHTML('afterbegin', '<div class="ghl-step-num">' + step_name +'&nbsp;' + i + '&nbsp;of&nbsp;' + total_steps + '</div>');
    });
}