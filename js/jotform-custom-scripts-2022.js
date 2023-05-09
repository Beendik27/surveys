var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
jq.onload=init_survey;
document.getElementsByTagName('head')[0].appendChild(jq);
//hide_steps = false;
//hide_previous = false;
oldVue=false;
// this is for backward compatibility. 
// in case someone has the survey-step-num.js included. We don't want it to fire.
function init_survey()
{
    if (window.hasOwnProperty('hide_steps') && hide_steps){
        css = '<style>.step { display:none !important; }</style>';
        jQuery('head').append(css);     
    }
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
   /* Build Survey Function Called In a Loop at End for each survey*/
function build_survey(hl_survey) {          
                
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
            // add the custom classes for the special field types
            var this_question = jQuery(this);
            i++;
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
                jQuery('input[name="city"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-odd');
                jQuery('input[name="state"]').parents('.ipt-text .menu-field-wrap').addClass('opt-length opt-even');
            } else {}
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
        /* Enable/Disable Progress Bar */
        jQuery(hl_survey).find('.ghl-footer').each(function(){
            var progBar = jQuery(this).find('.ghl-progress-bar');
            if (jQuery(progBar).length == 1) {
              jQuery(this).addClass('enabled');
            } else {
              console.log('child-element is not present inside parent-element');
              jQuery(this).addClass('disabled');
            }
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
} 
function listenForSlideChange(hl_survey) {
    // create a mutationObserver that listens for changes inside of .ghl-question-set
    const observer = new MutationObserver((mutations) => {
        currentSlideIndex=findCurrentIndex(hl_survey);
        jQuery(hl_survey).find('.progress-cell').removeClass('active');
        jQuery(hl_survey).find('.item-' + currentSlideIndex).addClass('active');
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