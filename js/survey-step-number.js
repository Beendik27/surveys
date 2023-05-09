

function surveynumberscript() {
    console.log('surveynumberscript');

    // no need to place this inside a ready block because Vue injects only after ready.
    if (window.hasOwnProperty('step_name')&& step_name.length>0)
        q = step_name;

    if (document.getElementById('jstp'))
        q = document.getElementById('jstp').getAttribute('step');

    if (typeof (q) === "undefined") {
        q = 'Question';
    }

    var i = 0;
    var n = document.getElementsByClassName('ghl-question').length;

    document.querySelectorAll('.ghl-question').forEach(function(question) {
        if (!question.querySelector('.step'))
        {
            i++;
            question.classList.add('fm-steps' + i);
			// when embedded on a funnel, a div or span here will be overwritten by the builder sometimes
            mnode = document.createElement('p');
            mnode.classList.add('step');
            mnode.innerHTML = q + '&nbsp;' + i + '&nbsp;of&nbsp;' + n;
            question.insertBefore(mnode, question.firstChild);
        }
    });

}

// document.addEventListener('pageshow',surveynumberscript);
window.addEventListener('load',loadit);
surveynumberscript();
function loadit() {
    // this is necessary with the new page builder
    interval=100;
    // run surveynumberscript every 100ms for 2000ms
    for (i=0;i<20;i++) {
        setTimeout(surveynumberscript,interval);
        interval+=100;
    }
}
 