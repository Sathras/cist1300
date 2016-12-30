/* global $ */

// this function allows us to check if the email is actually a valid email address
// using a regular expression.
// This is some advanced technique to compare a string with a set
// of rules you define in the expression. If the the string passes through the
// rule checks it returns true and we know it is an email address.
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// when submitting the form, execute this function
$('form').submit(function(event){

    // event = object, that tells JavaScript more details about the form submission
    // (e.g. when it was submitted, what elements, what data,...)

    // this line prevents the form to actually be submitted to somewhere
    event.preventDefault();

    // VALIDATION

    // get values from form and initiate with no error
    var Alert = $('.alert');
    var email = $('#inpEmail').val();
    var text  = $('#inpText').val();
    var error = false;
    var feedback = "<strong>Success!</strong>"
        + " Many thanks for your feedback! We received your message and will reply"
        + " to you within the next two days.";

    // remove all validation classes since they are reevaluated in a second
    Alert.removeClass('alert-danger alert-info');
    $('.form-group').removeClass('has-error');

    // first we check if the text in the email field is actually a valid email address

    // if email was not filled out at all set
    if(email.length === 0){
        error = true;
        feedback = "<strong>Error!</strong>"
        + " You have to fill in an email address!";
        $('#inpEmail').parent().addClass('has-error');
    }

    // With ! in the beginning of the expression we reverse the result since we
    // want to produce an error only if it is NOT an email address
    else if (! validateEmail(email)) {
        error = true;
        feedback = "<strong>Error!</strong>"
        + " You have not entered a valid email address!";
        $('#inpEmail').parent().addClass('has-error');
    }

    // we also want to ensure a user enters a text message
    else if (text.length === 0) {
        error = true;
        feedback = "<strong>Error!</strong>"
        + " You have not entered a message!";
        $('#inpText').parent().addClass('has-error');
    }

    // we also want to ensure the message is long enough
    else if (text.length <= 30) {
        error = true;
        feedback = "<strong>Error!</strong>"
        + " Your message is too short!";
        $('#inpText').parent().addClass('has-error');
    }

    // after all validation checks have been passed show the updated feedback alert
    if (error)  Alert.addClass('alert-danger')
    else        Alert.addClass('alert-info');

    // show alert and replace feedback text
    Alert.removeClass('hidden').children('p').html(feedback);
});

