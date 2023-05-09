<!-- Survey form moving progress bar -->
jQuery(document).ready(function($){
    $('.ghl-progress-bar').addClass('animate');
    var ques_leng = $('.ghl-question-set .ghl-question').length;
	$('button[aria-label="next button"]').click(function(){
		var curr_index = $('.ghl-page-current').index() + 2;
		if(curr_index == ques_leng){
			$('.ghl-progress-bar-text').html('Almost Complete!');
			console.log('Almost!');
		}
	});
});