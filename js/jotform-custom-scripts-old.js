
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
jq.onload=init_survey;
document.getElementsByTagName('head')[0].appendChild(jq);


hide_progress_bar = !document.querySelector('.ghl-progress-bar') ? true : false;
//hide_steps = false;
//hide_previous = false;

if (!window.SurveyScript)
{
    window.SurveyScript = {};
}

// this is for backward compatibility. 
// in case someone has the survey-step-num.js included. We don't want it to fire.

surveynumfunctionCalled = true;
function init_survey()
	{
		
	
jQuery(document).ready(function($){
	if (!window.SurveyScript.hasOwnProperty('running'))
	{
    // console.log('running');
    if (window.hasOwnProperty('hide_progress_bar') && hide_progress_bar) {
        css = '<style>.progress-bar { display:none !important; }</style>';
        jQuery('head').append(css);    	
    }
    if (window.hasOwnProperty('hide_steps') && hide_steps){
        css = '<style>.step { display:none !important; }</style>';
        jQuery('head').append(css);    	
    }
    // if (window.hasOwnProperty('hide_previous') && hide_previous){
        // css = '<style>.ghl-prev-button { display:none !important; }</style>';
        // jQuery('head').append(css);    	
    // }
                

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

			/* Survey option radio */

			jQuery(hl_survey).on('input', '.option-radio input[type="radio"]', function(e){
				e.preventDefault();

				hlapp = $(this).closest('.hl-app')[0].__vue__;
				var thisID = jQuery(this).attr('id');
				jQuery(this).attr('checked', 'checked');
				jQuery(this).prop("checked", true);
				jQuery('.ghl-page-current label.checked').removeClass('checked');
				jQuery('label[for="' + thisID + '"]').addClass('checked');
				if (hlapp.currentSlideIndex==(hlapp.formSurvey.formData.slides.length-1)) {
					jQuery('label[for="' + thisID + '"]').addClass('lastSlide');
					//jQuery('#submitButton').trigger('click');
					//hlapp.formSubmitDisable = true;
					hl_submit();
				} else {
				}
			});

			// /* Survey on submit */
            function hl_submit() 
            {
            	// we use a submit function instead so when a radio button triggers the submit, we can hook into the submit.
				console.log('submitting...');
				if (hl_survey.__vue__.validateFormSlide(hlapp.currentSlideIndex))
				{
						// if valid
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-processing');
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-submitted');
					jQuery(hl_survey).find('input[type="Submit"]').val('...Please Wait');
					jQuery(hl_survey).find('#progress_bar').hide();
					//jQuery(hl_survey).find('.ghl-prev-button').hide();

					setTimeout(function(){
						jQuery(hl_survey).find('.ghl-footer').hide();
					}, 1000);
					setTimeout(function(){
						jQuery(hl_survey).find('.ghl-survey-form').removeClass('form-processing');
						v.checkForNextSlide(); //this validates and submits.
						jQuery(hl_survey).find('input[type="Submit"]').val('Submit');
						jQuery(this).submit();
					}, 1500);
   				}

            }
			jQuery(hl_survey).on('submit', 'form[name="builder-form"]', function(e){
				e.preventDefault();
   				hl_submit();				
			});

            if (document.querySelectorAll('#surveystyles').length<=0)
            {
				css = '.alert.alert-danger ul li:not(:first-child) {display:none;}';
				jQuery('head').append('<style id="surveystyles">'+css+'</style>');            	
            }


			/* remove this because they let you add a previous button now? */
		    /* is back button enabled? If so, don't add our own */
		    
			jQuery(hl_survey).find('.ghl-button-bar').each(function(){
				custom_back_button=`<button type="button" role="button" aria-label="Prev Button" class="ghl-button ghl-prev-button ghl-mobile-prev ghl-custom-btn" style="display: none;"><span class="left-pointing-triangle"></span></button>`;
				custom_next_button=`<button type="button" role="button" aria-label="Next Button" class="ghl-button ghl-next-button ghl-mobile-next ghl-custom-btn"><span class="right-pointing-triangle"></span></button>`;
				custom_submit_button=`<input id="submitButton" type="submit" name="submitButton" aria-label="Submit" value="Submit" class="ghl-button ghl-submit-button ghl-custom-btn" style="display: none;">`;
				// disabled
				// jQuery(this).prepend(custom_next_button+custom_submit_button);
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

			// Custom previous and next buttton -->
			var required_inputs = 0;
			var input_val = 0;
			// jQuery(hl_survey).find('.ghl-next-prev').hide();
			jQuery(hl_survey).find('.ghl-progress-bar').hide();
			
			/* hide? */
			jQuery(hl_survey).find('button[aria-label="Prev Button"]').hide();

			// Insert Progress Bar
			jQuery(hl_survey).find('.ghl-survey-form').each(function(){
				jQuery(this).append('<div id="progress_bar" class="progress-bar"></div>');
			});

			var count = 0;
			jQuery(hl_survey).find('#_builder-form .ghl-question').each(function(){
				jQuery(this).attr('data-count', count);
				jQuery(hl_survey).find('#progress_bar').append('<div class="progress-cell item-' + count + '"><div class="progress-item"></div></div>');
				count++;
				jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
			});
			var questions_length = jQuery(hl_survey).find('.ghl-question').length;
			
			v = hl_survey.__vue__;
			v.moveToNext = (function() {
				var cached_function = v.moveToNext;
				return function() {
					// your code
					// needs to validate requireds
					var result = cached_function.apply(this, arguments); // use .apply() to call it
					hlapp = hl_survey.__vue__;
					jQuery(hl_survey).find('.progress-cell').removeClass('active');
					jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
					return result;
				};
			})();
			v.moveToPrev = (function() {
				var cached_function = v.moveToPrev;
				return function() {
					// your code
					// needs to validate requireds
					var result = cached_function.apply(this, arguments); // use .apply() to call it
					hlapp = hl_survey.__vue__;
					jQuery(hl_survey).find('.progress-cell').removeClass('active');
					jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
					return result;
				};
			})();

            /* Come back */
            // v = hl_survey.__vue__;
            
			// v.moveToNext = (function() {
				
			// 	var cached_function = v.moveToNext;

			// 	return function() {
			// 		// your code

			// 		// needs to validate requireds
			// 		var result = cached_function.apply(this, arguments); // use .apply() to call it

			// 		hlapp = hl_survey.__vue__;
			// 		jQuery(hl_survey).find('.progress-cell').removeClass('active');
			// 		jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
			// 		if (hlapp.currentSlideIndex>0)
			// 			jQuery(hl_survey).find('button[aria-label="Prev Button"]').show();
			// 		// mark the progress bar
			// 		// more of your code
			// 		if (hlapp.currentSlideIndex==(v.formSurvey.formData.slides.length-1)) 
			// 		{
			// 			jQuery(hl_survey).find('button[aria-label="Next Button"]').hide();
			// 			jQuery(hl_survey).find('#submitButton').show();
			// 		} else
			// 		{
			// 			jQuery(hl_survey).find('button[aria-label="Next Button"]').show();
			// 			jQuery(hl_survey).find('#submitButton').hide();	        	
			// 		}
			// 		return result;
			// 	};
			// })();

			// jQuery(hl_survey).find('button[aria-label="Next Button"]').unbind('click');
			// jQuery(hl_survey).on('click', 'button[aria-label="Next Button"]', function(e){
				
			//     v = $(this).closest('.hl-app')[0].__vue__;

			// 	$.when(v.moveToNext(1)).then(function(){

			// 		if (jQuery(hl_survey).find('.ghl-page-current').length>1)
			// 		{
			// 			jQuery(hl_survey).find('.ghl-page-current').removeClass('.ghl-page-current');
			// 			fmstep = hlapp.currentSlideIndex+1;
			// 			console.log('adding fmstep:'+fmstep   );
			// 			jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');								
			// 		}
					
			// 		window.setTimeout(function() {
			// 				console.log('firing after 800 ms');

							
                            


			// 				if (jQuery(hl_survey).find('.ghl-page-current').length<=0)
			// 				{
			// 					fmstep = hlapp.currentSlideIndex+1;
			// 					console.log('adding fmstep:'+fmstep   );
			// 					jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
			// 				}
			// 			},1000);

			// 	});
			// });

			// jQuery(hl_survey).on('click', 'button[aria-label="Prev Button"]', function(e){
			// 	console.log('click - prev button');
			// 	v = $(this).closest('.hl-app')[0].__vue__;
				
			// 	hlapp = $(this).closest('.hl-app')[0].__vue__;
			// 	fmstep = hlapp.currentSlideIndex+1;

			// 	$.when(v.moveToPrev(1)).then(function(){
			// 		console.log('done moveToPrev');
			// 		fmstep = hlapp.currentSlideIndex+1;
			// 		jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
					
			// 		if (jQuery(hl_survey).find('.ghl-page-current').length>1)
			// 		{
			// 			jQuery(hl_survey).find('.ghl-page-current').removeClass('.ghl-page-current');
			// 			fmstep = hlapp.currentSlideIndex+1;
			// 			console.log('adding fmstep:'+fmstep   );
			// 			jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');								
			// 		}
					
					
			// 		window.setTimeout(function() {
			// 			console.log('firing after 800 ms');
			// 			console.log(jQuery(hl_survey).find('.ghl-page-current').length);
			// 			console.log(jQuery(hl_survey).find('.ghl-page-current')[0]);
			// 		    if (jQuery(hl_survey).find('.ghl-page-current').length<=0)
			// 		    {
			// 		    	fmstep = hlapp.currentSlideIndex+1;
			// 		    	console.log('adding fmstep:'+fmstep   );
			// 		        jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
			// 		    }
			// 		},1000);
			// 	});				

			// 	jQuery(hl_survey).find('.progress-cell').removeClass('active');
			// 	jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
			// 	if (hlapp.currentSlideIndex>0){
			// 		jQuery(hl_survey).find('button[aria-label="Prev Button"]').show();
			// 	} else {
			// 		jQuery(hl_survey).find('button[aria-label="Prev Button"]').hide();
			// 	}


			// 	jQuery(hl_survey).find('button[aria-label="Next Button"]').show();
			// 	jQuery(hl_survey).find('#submitButton').hide();	    
			// });

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

		if (window.hasOwnProperty('step_name'))
		    q = step_name;

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


fixQueryParams();
function fixQueryParams()
{
    

// Fix QueryString Parameters Working
hl = document.querySelector('.hl-app').__vue__;
// hl.formData.form.fields
var searchParams = new URLSearchParams(window.location.search);
searchParams.forEach(function(value, key) {
      if (hl.formdData)
      {
              custom_field = hl.formData.form.fields.find((field)=>field.id==key);
              if (custom_field) {
                  console.log(key);
                  hl.formFieldsValue[key]=value;

              }  
      }
      else 
      {
       hl.formFieldsValue[key]=value;   
      }
});
hl.$forceUpdate();
}
}

