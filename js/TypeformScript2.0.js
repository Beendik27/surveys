/* Typeform Script 2.0 Full Screen - Nuxt */ 
/* Copyright 2020 The Marketers Toolkit for Go High Level */ 
/* Do not copy or distribute without permission */

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
        css = '<style>#_builder-form .option-radio label::before { content:"\\f00c" !important; font-family: FontAwesome; } #_builder-form .option label::before { content:"\\f00c" !important; font-family: FontAwesome; } #_builder-form .in-r-c label::before { content:"\\f00c" !important; font-family: FontAwesome; }</style>';
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
    
    /* Survey option radio */
	document.body.onkeydown = function (e) {
        //console.log(e.keyCode);
        if (!e.target.matches('input,textarea'))
        {
        if (e.keyCode == 65) // a
            jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input, .ghl-page-current .in-r-c input')[0].click();
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
    
    jQuery(hl_survey).find('.ghl-form-wrap').each(function(){
		// adjust height for responsive view
        setTimeout(function(){
            var fwrap = jQuery('.ghl-form-wrap');
            jQuery('.ghl-page-current.ghl-question').each(function(){
                var qheight = jQuery(this).height();
                if( qheight >= 300 ){
                        jQuery(fwrap).addClass('maxed');
                } else if( qheight <= 399 ){
                        jQuery(fwrap).removeClass('maxed');
                }
            });
	    }, 200);
    });
    
    jQuery(hl_survey).find('.ghl-question').each(function(){
        if(jQuery(this).height() >= 700 ){
            jQuery(this).addClass('maxed');
        }
    });
	
	/*jQuery(hl_survey).on('click', 'button[type="button"]', function(){
	    setTimeout(function(){
            var qheight = jQuery('.ghl-question-set').height();
            var fwrap = jQuery(hl_survey).find('.ghl-form-wrap').length;
            if( qheight >= 900 ){
                    jQuery(fwrap).addClass('maxed');
            } else if( qheight <= 899 ){
                    jQuery(fwrap).removeClass('maxed');
            }
	    }, 800);
    });*/
	
    
	jQuery(hl_survey).on('input', '.option-radio input[type="radio"]', function(e){
		e.preventDefault();
		var thisID = jQuery(this).attr('id');
		jQuery(this).attr('checked', 'checked');
		jQuery(this).prop("checked", true);
		jQuery('.ghl-page-current label.checked').removeClass('checked');
		jQuery('label[for="' + thisID + '"]').addClass('checked');
	});
    
    /* Survey continue button */
	jQuery(hl_survey).on('click', '.continue-btn', function(){
		jQuery('button.ghl-next-button').trigger('click');
	});
                
    listenForSlideChange(hl_survey);
    addStepNumbers(hl_survey);
        /* Survey Slide */

        /* we removed the whole hl_submit() function because it's not possible with new surveys */
    
        if (document.querySelectorAll('#surveystyles').length<=0)
        {
            css = '.alert.alert-danger ul li:not(:first-child) {display:none;}';
            jQuery('head').append('<style id="surveystyles">'+css+'</style>');                
        }
        // REMOVED THE OUR OWN PREV AND NEXT BUTTONS
        
        /* Add classes to the option radio and input field */

		var i = 0;
			var n = jQuery(hl_survey).find('.ghl-question').length;
			jQuery(hl_survey).find('.ghl-question').each(function(){
				var this_question = jQuery(this);
				i++;
				var this_val =  jQuery(this).val();
				if(jQuery(this).find('input[name="first_name"]').length && jQuery(this).find('input[name="last_name"]').length ){
					// add classes for firstname & lastname side by side
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
        			if(jQuery(this).find('input[value*="Continue"],input[value*="continue"]').length && jQuery(this).find('input[type="radio"]').length === 1 ){
        				jQuery(this).addClass('opt-button');
        			}
        		});
        		this_question.find('.fields-container').each(function(){
        			if(jQuery(this).find('input.form-control[type="text"]').length === 1 ){
        				jQuery(this).append('<div class="pr-enter"><span><strong>press Enter </strong><small>↵</small></span></div>');

        			}
        		});
				this_question.find('.menu-field-wrap').each(function(){
					if ($(this).find('input[value^=Star], input[value^=star]').length > 0) {
						jQuery('input[value^=Star], input[value^=star]').parents('.option-radio').addClass('star');
						jQuery(this).addClass('opt-star');
					}
        		});

                // add the new scale 1-10 style
                addScale();

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
            jQuery(hl_survey).find('#progress_bar').append('<div class="progress-cell item-' + count + '"><div class="progress-item"></div></div>');
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
        
        if ($('#hl_main_popup').width() < 480 ){
		  jQuery(window).scroll(function(){
                if (jQuery(this).scrollTop() > 100) {
                   jQuery('.ghl-footer').addClass('sBottom');
                   jQuery('.ghl-footer').removeClass('sTop');
                } else {
                   jQuery('.ghl-footer').removeClass('sBottom');
                   jQuery('.ghl-footer').addClass('sTop');
                }
            });
		} else if ($('#app').width() < 480 ){
		  jQuery(window).scroll(function(){
                if (jQuery(this).scrollTop() > 100) {
                   jQuery('.ghl-footer').addClass('sBottom');
                   jQuery('.ghl-footer').removeClass('sTop');
                } else {
                   jQuery('.ghl-footer').removeClass('sBottom');
                   jQuery('.ghl-footer').addClass('sTop');
                }
            });
		}
}

function listenForSlideChange(hl_survey) {
    // create a mutationObserver that listens for changes inside of .ghl-question-set
    const observer = new MutationObserver((mutations) => {
        currentSlideIndex=findCurrentIndex(hl_survey);
        jQuery(hl_survey).find('.progress-cell').removeClass('active');
        jQuery(hl_survey).find('.item-' + currentSlideIndex).addClass('active');
        jQuery(hl_survey).find('.ghl-form-wrap').each(function(){
            setTimeout(function(){
                var fwrap = jQuery('.ghl-form-wrap');
                jQuery('.ghl-page-current.ghl-question').each(function(){
                    var qheight = jQuery(this).height();
                    if( qheight >= 900 ){
                            jQuery(fwrap).addClass('maxed');
                    } else if( qheight <= 899 ){
                            jQuery(fwrap).removeClass('maxed');
                    }
                });
    	    }, 200);
        });
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

function addScale() {
    document.querySelectorAll('input[placeholder="1-10"]').forEach(function (input){

        if (input.closest('.form-builder--item').querySelector('.scale'))
            return;
        // create 10 radio buttons with squares using jquery
        var scalebox = '<div class="scale">';
        for (var i = 1; i <= 10; i++) {
            scalebox += "<div class='scale-item'><input type='radio' onclick='' name='scale' value='" + i + "'><div class='scale-label'>" + i + "</div></input></div>";
        }
        scalebox += '</div>';
        $(input).parent('.form-builder--item').append(scalebox);
        $(input).hide();
        $(input).parent('.form-builder--item').find('input').each(function(input) {
            // console.log(input);
            // add click event to each radio button
            $(this).click(function(e) {
                // set the input value to the value of the radio button
                e.preventDefault();
                // remove class on radio buttons to show the selected value
                e.target.closest('.form-builder--item').querySelectorAll('.scale-item').forEach(function (el) {
                    el.classList.remove('scaleSelected');
                });
                // add class on radio buttons to show the selected value
                $(e.target).parent('.scale-item').addClass('scaleSelected');
                // e.target.closest('.scale-item').classList.add('scaleSelected');
                e.target.checked=true;
                // jQuery(e.target).prop("checked", true);
                // get the value of the selected radio button
                var scaleValue = e.target.value;
                // change the value of the input field to the selected radio button value
                input = e.target.closest('.form-builder--item').querySelector('input.form-control');
                input.value = scaleValue;
               
                input.dispatchEvent(new Event('input'));
                nextButton = document.querySelector('.ghl-next-button');
                if (nextButton) {
                    nextButton.click();
                }
            });
        });
        //this removes the input field
        //inject css for horizontal 10 scale
        var css = ".scale {display: inline-block; width: 100%;} .scale-item {display: inline-block; width: 9%; text-align: center;}";
        $("head").append("<style>" + css + "</style>");
        //prepend scalebox to input
    });
    
    
}



     
// add click event to radio buttons
function scaleClick(e) {
    e.preventDefault();
    // remove class on radio buttons to show the selected value
    e.target.closest('.form-builder--item').querySelectorAll('.scale-item').forEach(function (el) {
        el.classList.remove('selected');
    });
    // add class on radio buttons to show the selected value
    // $(e.target).parent('.scale-item').addClass('scaleSelected');
    e.target.closest('.scale-item').classList.add('selected');
    e.target.checked=true;
    // jQuery(e.target).prop("checked", true);
    // get the value of the selected radio button
    var scaleValue = e.target.value;
    // change the value of the input field to the selected radio button value
    input = e.target.closest('.form-builder--item').querySelector('input.form-control');
    input.value = scaleValue;
    console.log(input);
    input.dispatchEvent(new Event('input'));
}