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
					jQuery('.ghl-page-current').addClass('lastSlide');
				} else {
				}
				if (jQuery('.ghl-progress-bar-inner-div.item-0').hasClass('active')) {
                	jQuery('#_builder-form.ghl-survey-form').addClass('firstSlide');
                }
                jQuery('#_builder-form .ghl-question.address-type').each(function(){
    				jQuery(hl_survey).find('.ghl-question.address-type .form-builder--item.form-builder--item-input').append('<button type="button" class="custom-btn btn btn-dark">Find Out</button>');
    			});
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
                   v.moveToNext(1);
                }
                
                if (e.keyCode==8 && !(e.target.type == 'text') || (e.target.type == 'tel') || (e.target.type == 'email')) { // backspace
                    console.log(e.target.type);

                    // jQuery('button[aria-label="Prev Button"]').click();
                }
            };
            
            jQuery(hl_survey).on('input', '.option-radio input[type="radio"]', function(e){
				e.preventDefault();

				hlapp = $(this).closest('.hl-app')[0].__vue__;
				var thisID = jQuery(this).attr('id');
				jQuery(this).attr('checked', 'checked');
				jQuery(this).prop("checked", true);
				jQuery('.ghl-page-current label.checked').removeClass('checked');
				jQuery('label[for="' + thisID + '"]').addClass('checked');
			});
            
            /* Survey on submit */
            function hl_submit() {
            	// we use a submit function instead so when a radio button triggers the submit, we can hook into the submit.
				if (hl_survey.__vue__.validateFormSlide(hlapp.currentSlideIndex))
				{
						// if valid
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-processing');
					jQuery(hl_survey).find('.ghl-survey-form').addClass('form-submitted');
					jQuery(hl_survey).find('.ghl-mobile-next').addClass('submit-btn');
					jQuery(hl_survey).find('input[type="Submit"]').val('...Please Wait');
					jQuery(hl_survey).find('.ghl-progress-bar').hide();
					jQuery(hl_survey).find('.ghl-back-button').hide();

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
			
			/* Survey continue button */

			jQuery(hl_survey).on('click', '.continue-btn', function(){
				jQuery('button[aria-label="next button"]').trigger('click');
			});
			jQuery(hl_survey).on('click', '.custom-btn', function(){
				jQuery('button[aria-label="next button"]').trigger('click');
			});
            if (document.querySelectorAll('#surveystyles').length<=0)
            {
				css = '.alert.alert-danger ul li:not(:first-child) {display:none;}';
				jQuery('head').append('<style id="surveystyles">'+css+'</style>');
            }
            
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
					if(jQuery(this).find('input[value="Yes"]').length && jQuery(this).find('input[value="No"]').length && jQuery(this).find('input[type="radio"]').length === 2 ){
						jQuery(this).addClass('opt-button');
						jQuery('input[value="Yes"]').parents('.opt-button .option-radio').addClass('opt-length opt-odd');
						jQuery('input[value="No"]').parents('.opt-button .option-radio').addClass('opt-length opt-even');
					}
				});
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
			
			jQuery(hl_survey).find('.ghl-progress-bar').each(function(){
				jQuery(this).addClass('jtform');
			});
			
			jQuery('.ghl-question').prepend('<div class="location"></div');
			
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
                    var inputAddress = jQuery('.googleaddress');
                    jQuery(inputAddress).each(function(i, e) {
                        jQuery('.location').text(jQuery(e).val());
                    });
                    if (jQuery('.ghl-progress-bar-inner-div.item-0').hasClass('active')) {
                    	jQuery('#_builder-form.ghl-survey-form').addClass('firstSlide');
                    } else {
                        jQuery('#_builder-form.ghl-survey-form').removeClass('firstSlide');
                    }
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
                    var inputAddress = jQuery('.googleaddress');
                    jQuery(inputAddress).each(function(i, e) {
                        jQuery('.location').text(jQuery(e).val());
                    });
                    if (jQuery('.ghl-progress-bar-inner-div.item-0').hasClass('active')) {
                    	jQuery('#_builder-form.ghl-survey-form').addClass('firstSlide');
                    } else {
                        jQuery('#_builder-form.ghl-survey-form').removeClass('firstSlide');
                    }
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
			
		/*window.onclick = function () {
            jQuery(hl_survey).find('.ghl-page-rotateSlideOutNext').each(function(){
    			jQuery('.ghl-page-rotateSlideOutNext').toggleClass('SlideOutNext');
                setTimeout(function(){
                    // toggle back after 1 second
                    jQuery('.ghl-page-rotateSlideOutNext').toggleClass('SlideOutNext');
                },200)
    		});
        }
        if ($('#app').width() < 480 ){
		  jQuery(window).scroll(function(){
                if (jQuery(this).scrollTop() > 100) {
                   jQuery('.ghl-footer').addClass('sBottom');
                   jQuery('.ghl-footer').removeClass('sTop');
                } else {
                   jQuery('.ghl-footer').removeClass('sBottom');
                   jQuery('.ghl-footer').addClass('sTop');
                }
            });
		}*/

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