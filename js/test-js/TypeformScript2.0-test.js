if (!document.querySelector('script[src*=jquery]'))
{
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
	jq.onload=init_survey;
	document.getElementsByTagName('head')[0].appendChild(jq);
} else
{
	init_survey();
}

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
	if (!window.SurveyScript.hasOwnProperty('running')){
	    console.log('running');
	    css='';
	    if (window.hasOwnProperty('hide_progress_bar') && hide_progress_bar)
	        css += '.progress-bar { display:none !important; }';
	      
	    if (window.hasOwnProperty('hide_steps') && hide_steps)
	        css += '.step { display:none !important; }';
	 
	    if (window.hasOwnProperty('hide_previous') && hide_previous)
	        css += '.ghl-prev-button { display:none !important; } #_builder-form .ghl-button-bar .ghl-next-button, #_builder-form .ghl-button-bar .ghl-submit-button { width: 100% !important; border-left: 0px !important} .hl-app #_builder-form .ghl-footer, .ghl-footer { max-width: 160px; } #_builder-form .ghl-button-bar .ghl-submit-button { padding: 15px 10px 15px 15px !important; text-align: center; }';
	        
	    if (window.hasOwnProperty('show_check') && show_check)
	        css += '#_builder-form .option-radio label::before { content:"\\f00c" !important; font-family: FontAwesome; } #_builder-form .option label::before { content:"\\f00c" !important; font-family: FontAwesome; }';
	    } else {
	        css += '#_builder-form .ghl-question-set { content:"" !important;}';
	    }
	    if (window.hasOwnProperty('fixed_height') && fixed_height){
	        css += '#_builder-form .ghl-question-set { max-height:auto; min-height:auto;}';
	    } else {
	        css += '#_builder-form .ghl-question-set { max-height:none; min-height:none; }';
	    }
	    jQuery('head').append('<style id="typeformv2">'+css+'</style>'); 
	
    /* Build Survey Function Called In a Loop at End */
    function build_survey(hl_survey) {	        
	    		
			v = hl_survey.__vue__;

			/* Survey Slide */

			hlapp = hl_survey.__vue__;
			fmstep = hlapp.currentSlideIndex+1;

			window.setTimeout(function() {
				if (hlapp.currentSlideIndex==(hlapp.formSurvey.formData.slides.length-1)) {
					jQuery('.ghl-survey-form').addClass('only-slide');
					jQuery('.ghl-page-current').addClass('lastSlide');
					console.log('last slide');
				} else {
					console.log('slide');
				}
			}, 500);

			/* Survey option radio */
			document.body.onkeydown = function (e) {
                //console.log(e.keyCode);
                if (!e.target.matches('input,textarea'))
                {
                if (e.keyCode == 65) // a
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[0].click();
                if (e.keyCode == 66) // b
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[1].click();
                if (e.keyCode == 67) // c
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[2].click();
                if (e.keyCode == 68) // d
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[3].click();
                if (e.keyCode == 69) // e
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[4].click();
                if (e.keyCode == 70) // f
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[5].click();
                if (e.keyCode == 71) // g
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[6].click();
                if (e.keyCode == 72) // h
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[7].click();
                if (e.keyCode == 73) // i
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[8].click();
                if (e.keyCode == 74) // j
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[9].click();
                if (e.keyCode == 75) // k
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[10].click();
                if (e.keyCode == 76) // l
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[11].click();
                if (e.keyCode == 77) // m
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[12].click();
                if (e.keyCode == 78) // n
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[13].click();
                if (e.keyCode == 79) // o
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[14].click();
                if (e.keyCode == 80) // p
                    jQuery('.ghl-page-current .option input, .ghl-page-current .option-radio input')[15].click();
				} 
                /*console.log(e.keyCode);
                test = e.target
                console.log(e.target);
                console.log(e.target.value);*/
                
                if (e.keyCode == 13 && !((e.target.type == 'text') || (e.target.type == 'tel') || (e.target.type == 'email'))) { // enter
					// console.log(e.target);
					v = document.querySelector('.hl-app').__vue__;
					console.log('next next next');
                   v.moveToNext(1);
                }
                
                if (e.keyCode==8 && !(e.target.type == 'text') || (e.target.type == 'tel') || (e.target.type == 'email')) { // backspace
                    console.log(e.target.type);

                    // jQuery('button[aria-label="Prev Button"]').click();
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
				if (hlapp.currentSlideIndex==(hlapp.formSurvey.formData.slides.length-1)) {
					hl_submit();
				} else {
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
			});
			
			/* Survey continue button */

			jQuery(hl_survey).on('click', '.continue-btn', function(){
				jQuery('button[aria-label="Next Button"]').trigger('click');
			});
			
			/* Survey on submit */
            function hl_submit() 
            {
            	// we use a submit function instead so when a radio button triggers the submit, we can hook into the submit.
				console.log('submitting...');
				if (hl_survey.__vue__.validateFormSlide(hlapp.currentSlideIndex))
				{
						// if valid
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-processing');
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-submitted');
					jQuery(hl_survey).find('.ghl-mobile-next').addClass('submit-btn');
					jQuery(hl_survey).find('input[type="Submit"]').val('...Please Wait');
					jQuery(hl_survey).find('#progress_bar').hide();
					jQuery(hl_survey).find('.ghl-prev-button').hide();

					setTimeout(function(){
						console.log('hiding footer');
						jQuery(hl_survey).find('.ghl-footer').hide();
					}, 1000);
					setTimeout(function(){
						jQuery(hl_survey).find('.ghl-survey-form').removeClass('form-processing');
						//v.checkForNextSlide(); this validates and submits.
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
			jQuery(hl_survey).find('.ghl-button-bar').each(function(){
				jQuery(this).prepend('<button type="button" role="button" aria-label="Prev Button" class="ghl-button ghl-prev-button ghl-mobile-prev ghl-custom-btn" style="display: none;"><span class="left-pointing-triangle"></span></button><button type="button" role="button" aria-label="Next Button" class="ghl-button ghl-next-button ghl-mobile-next ghl-custom-btn"><span class="right-pointing-triangle"></span></button><input id="submitButton" type="submit" name="submitButton" aria-label="Submit" value="Submit" class="ghl-button ghl-submit-button ghl-custom-btn" style="display: none;">');
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
        			if(jQuery(this).find('input.form-control').length === 1 ){
        				jQuery(this).append('<div class="pr-enter"><span>press <strong>Enter ↵</strong></span></div>');

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
				});
			});

			// Custom previous and next buttton -->
			var required_inputs = 0;
			var input_val = 0;
			jQuery(hl_survey).find('.ghl-next-prev').hide();
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
				if(count == 1){
					jQuery(hl_survey).find('.item-' + count).addClass('active');
				}
			});
			var questions_length = jQuery(hl_survey).find('.ghl-question').length;

            /* Come back */
            v = hl_survey.__vue__;
			v.handleSubmitO = v.handleSubmit;

            v.handleSubmit = function(e) {
            		console.log('submitting');
					v.handleSubmitO(e);
					jQuery('.ghl-footer').hide();
					jQuery('#progress_bar').hide();
			}
			v.moveToNext = (function() {
				
				var cached_function = v.moveToNext;

				return function() {
					// your code

					// needs to validate requireds

					var result = cached_function.apply(this, arguments); // use .apply() to call it
					
					hlapp = hl_survey.__vue__;
					jQuery(hl_survey).find('.progress-cell').removeClass('active');
					jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
					if (hlapp.currentSlideIndex>0)
						jQuery(hl_survey).find('button[aria-label="Prev Button"]').show();
					// mark the progress bar
					// more of your code
					if (hlapp.currentSlideIndex==(v.formSurvey.formData.slides.length-1)) 
					{
						jQuery(hl_survey).find('button[aria-label="Next Button"]').hide();
						jQuery(hl_survey).find('#submitButton').show();
					} else
					{
						jQuery(hl_survey).find('button[aria-label="Next Button"]').show();
						jQuery(hl_survey).find('#submitButton').hide();	        	
					}

					window.setTimeout(function() { 
						jQuery('.ghl-page-current input, .ghl-page-current textarea').first().focus(); 
						},1000);

					return result;
				};
			})();

			jQuery(hl_survey).find('button[aria-label="Next Button"]').unbind('click');
			jQuery(hl_survey).on('click', 'button[aria-label="Next Button"]', function(e){
				
			    v = $(this).closest('.hl-app')[0].__vue__;

				$.when(v.moveToNext(1)).then(function(){
                    
					if (jQuery(hl_survey).find('.ghl-page-current').length>1)
					{
						jQuery(hl_survey).find('.ghl-page-current').removeClass('.ghl-page-current');
						fmstep = hlapp.currentSlideIndex+1;
						console.log('adding fmstep:'+fmstep   );
						jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
					}
					
					window.setTimeout(function() {
							if (jQuery(hl_survey).find('.ghl-page-current').length<=0)
							{
								fmstep = hlapp.currentSlideIndex+1;
								console.log('adding fmstep:'+fmstep   );
								jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
							}
						},1000);

				});
				
				
			});

			jQuery(hl_survey).on('click', 'button[aria-label="Prev Button"]', function(e){
				v = $(this).closest('.hl-app')[0].__vue__;
				
				hlapp = $(this).closest('.hl-app')[0].__vue__;
				fmstep = hlapp.currentSlideIndex+1;
				
				$.when(v.moveToPrev(1)).then(function(){
				    
					fmstep = hlapp.currentSlideIndex+1;
					jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
					
					if (jQuery(hl_survey).find('.ghl-page-current').length>1)
					{
						jQuery(hl_survey).find('.ghl-page-current').removeClass('ghl-page-current');
						fmstep = hlapp.currentSlideIndex+1;
						console.log('adding fmstep:'+fmstep   );
						jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');								
					}
					
					
					window.setTimeout(function() {
						console.log(jQuery(hl_survey).find('.ghl-page-current').length);
						console.log(jQuery(hl_survey).find('.ghl-page-current')[0]);
					    if (jQuery(hl_survey).find('.ghl-page-current').length<=0)
					    {
					    	fmstep = hlapp.currentSlideIndex+1;
					        jQuery(hl_survey).find('.fm-steps'+fmstep).addClass('ghl-page-current');
					    }
					},1000);
				});				

				jQuery(hl_survey).find('.progress-cell').removeClass('active');
				jQuery(hl_survey).find('.item-' + hlapp.currentSlideIndex).addClass('active');
				if (hlapp.currentSlideIndex>0){
					jQuery(hl_survey).find('button[aria-label="Prev Button"]').show();
				} else {
					jQuery(hl_survey).find('button[aria-label="Prev Button"]').hide();
				}

				jQuery(hl_survey).find('button[aria-label="Next Button"]').show();
				jQuery(hl_survey).find('#submitButton').hide();	    
			});

		/* Form Width */

			var popwidth = $('#hl_main_popup').width();
			if ($('#hl_main_popup').width() == 900 ){
			  $('.ghl-survey-form').addClass('fullwidth');
			} else if ($('#hl_main_popup').width() == 660 ){
			  $('.ghl-survey-form').addClass('medium');
			} else if ($('#hl_main_popup').width() == 490 ){
			  $('.ghl-survey-form').addClass('small');
			}
			
		/*window.onclick = function () {
            jQuery(hl_survey).find('.ghl-page-rotateSlideOutNext').each(function(){
    			jQuery('.ghl-page-rotateSlideOutNext').toggleClass('SlideOutNext');
                setTimeout(function(){
                    // toggle back after 1 second
                    jQuery('.ghl-page-rotateSlideOutNext').toggleClass('SlideOutNext');
                },200)
    		});
        }*/
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
   


	SurveyScript.running = true;
}); /* JQuery Ready */
}