/*
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
*/

//hide_progress_bar = false;
//hide_steps = false;
//hide_previous = false;

if (!window.SurveyScript)
{
    window.SurveyScript = {};
}

// this is for backward compatibility. 
// in case someone has the survey-step-num.js included. We don't want it to fire.

surveynumfunctionCalled = true;

jQuery(document).ready(function($){
	if (!window.SurveyScript.hasOwnProperty('running'))
	{
    console.log('running');
    if (window.hasOwnProperty('hide_progress_bar') && hide_progress_bar) {
        css = '<style>.progress-bar { display:none !important; }</style>';
        jQuery('head').append(css);    	
    }
    if (window.hasOwnProperty('hide_steps') && hide_steps){
        css = '<style>.step { display:none !important; }</style>';
        jQuery('head').append(css);    	
    }
    if (window.hasOwnProperty('hide_previous') && hide_previous){
        css = '<style>.ghl-prev-button { display:none !important; }</style>';
        jQuery('head').append(css);    	
    }
                

    /* Build Survey Function Called In a Loop at End */
    function build_survey(hl_survey) {	        
	    		
			v = hl_survey.__vue__;

			/* Survey Slide */

			hlapp = hl_survey.__vue__;
			fmstep = hlapp.currentSlideIndex+1;
			window.setTimeout(function() {
				if (hlapp.currentSlideIndex==(hlapp.formSurvey.formData.slides.length-1)) {
					jQuery('.ghl-page-current').addClass('lastSlide');
				} else {
				}
			}, 500);

            if (document.querySelectorAll('#surveystyles').length<=0)
            {
				css = '.alert.alert-danger ul li:not(:first-child) {display:none;}';
				jQuery('head').append('<style id="surveystyles">'+css+'</style>');            	
            }


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
					if(jQuery(this).find('input[value="Yes"]').length && jQuery(this).find('input[value="No"]').length && jQuery(this).find('input[type="radio"]').length === 2 ){
						jQuery(this).addClass('opt-button');
						jQuery('input[value="Yes"]').parents('.opt-button .option-radio').addClass('opt-length opt-odd');
						jQuery('input[value="No"]').parents('.opt-button .option-radio').addClass('opt-length opt-even');
					}
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
				});
			});
			
			// Insert Progress Bar
			
			jQuery(hl_survey).find('.ghl-progress-bar').each(function(){
				jQuery(this).addClass('jtform');
			});
			
			var count = 0;
			jQuery(hl_survey).find('#_builder-form .ghl-question').each(function(){
				jQuery(this).attr('data-count', count);
				jQuery(hl_survey).find('.ghl-progress-bar-background').append('<div class="ghl-progress-bar-inner-div item-' + count + '"><div class="progress-item"></div></div>');
				count++;
				jQuery('.ghl-progress-bar-background').find('.item-0').addClass('active');
			});
			
			/* Come back */
            v = hl_survey.__vue__;
            
			v.moveToNext = (function() {
				
				var cached_function = v.moveToNext;

				return function() {
					// your code

					// needs to validate requireds
					var result = cached_function.apply(this, arguments); // use .apply() to call it

					hlapp = hl_survey.__vue__;
					jQuery(hl_survey).find('.ghl-progress-bar-inner-div').removeClass('active');
					jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
				};
			})();
			
			v.moveToPrev = (function() {
				
				var cached_function = v.moveToPrev;

				return function() {
					// your code

					// needs to validate requireds
					var result = cached_function.apply(this, arguments); // use .apply() to call it

					hlapp = hl_survey.__vue__;
					jQuery(hl_survey).find('.ghl-progress-bar-inner-div').removeClass('active');
					jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
				};
			})();

		/* Form Width */

			var popwidth = $('#hl_main_popup').width();
			if ($('#hl_main_popup').width() == 900 ){
			  $('.ghl-survey-form').addClass('fullwidth');
			} else if ($('#hl_main_popup').width() == 660 ){
			  $('.ghl-survey-form').addClass('medium');
			} else if ($('#hl_main_popup').width() == 490 ){
			  $('.ghl-survey-form').addClass('small');
			}


		// Step #

		// no need to place this inside a ready block because Vue injects only after ready.
		if (document.getElementById('jstp')) 
		 q = document.getElementById('jstp').getAttribute('step');

		if (typeof(q) === "undefined") {
		 q = 'Question';	
		}

		var i = 0;
		var n = jQuery(hl_survey).find('.ghl-question').length;

       
		jQuery(hl_survey).find('.ghl-question').each(function() {
			i++;
			this.classList.add('fm-steps'+i);		
			mnode = document.createElement('div');
			mnode.classList.add('step');
			mnode.innerHTML =q+'&nbsp;' + i + '&nbsp;of&nbsp;' + n;
			this.insertBefore(mnode, this.firstChild);
		});
        
    } /* end build survey function */


    if (document.querySelectorAll('.hl-app').length>1)
    {
        document.querySelectorAll('.c-survey .hl-app').forEach(function(hl_survey) {
        	build_survey(hl_survey);
        });
    } else 
    {
            build_survey(document.querySelector('.hl-app'));
    }
    
    }


	SurveyScript.running = true;
}); /* JQuery Ready */



