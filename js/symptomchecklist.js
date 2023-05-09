// requires two variables declared 
// schedule = 'https://';
// disqualify = 'https://';
if (!window.hasOwnProperty('schedule')) {
	schedule="/schedule";
	disqualify="/disqualify";	
}
jQuery(document).ready(function($){
var often = 0;
var sometimes = 0;
var o = parseInt(sometimes)+parseInt(often);
var yesno = $('.option-radio input[type="radio"]').length;
$('.option-radio input[type="radio"]').on('click', function(e) {
    //$('.option-radio input[type="radio"]').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().siblings().children().find('input[type="radio"]').removeClass('active');
});
$('.option-radio input[type="radio"]').click(function(obj){
    often = $('.option-radio input[id^="Often"][checked]').length
    sometimes = $('.option-radio input[id^="Sometimes"][checked]').length
    never = $('.option-radio input[id^="Never"][checked]').length
    //$('.option-radio input[type="radio"]').removeClass('active');
    //$(this).addClass('active');
    if($(this).is(':checked')) {
            $(this).attr('checked','checked'); 
    }
    else {
            $(this).removeAttr('checked');
    }
    $('label:contains("Often")+input[type=number]').val(often);
    $('label:contains("Sometimes")+input[type=number]').val(sometimes);
});

var target = document.getElementsByClassName('ghl-question-set')[0];

// create an observer instance, safari via webkit
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// create the observer
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (!mutation.target.classList.contains('ghl-question-set')) {
          // it removes the ghl-question-set class when submitted.
          console.log('submitted');
			$('#form-builder').html('<h2>Loading...</h2>');

          if ( parseInt(sometimes) + parseInt(often) <= 2 ){
            
              window.location.href = disqualify;
              $(this).submit();
            } else if( parseInt(sometimes) + parseInt(often) >= 2) {
              $('#form-builder').hide();
              window.location.href =schedule;
              $(this).submit();
            }          
        }
    });
});
// configuration of the observer:
// only really need attributes
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

$(".ghl-next-prev button.ghl-next-button").click(function() {
  $("#overlay").animate({ scrollTop: 0 }, "fast");
return true;
});
});