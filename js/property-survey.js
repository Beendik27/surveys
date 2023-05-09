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
    const progressBar = document.querySelector('.ghl-progress-bar');
    const questionSet = document.querySelector('.ghl-question-set');
    questionSet.prepend(progressBar);
}