// enables scrollspy on navbar
$('body').scrollspy({ target: '#scrollspy' });

// enable closing menu when clicking on a link
$('#scrollspy a').click(function(){
    $('#scrollspy').removeClass('in');
});

// enables styled tooltips
$('[data-toggle="tooltip"]').tooltip();