$(document).ready(function (){

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    let change_email = function (email){
        $('#email').text(email);
        $('#emailModal').modal('hide');
        alert('Votre email a été modifié avec succès !');
    }

    $('#modify-form').submit(function(e){
        e.preventDefault();

        let data = {
            'oldEmail': $('#email').text(),
            'newEmail': $('input[name="email"]').val(),
        }

        $.ajax({
            url: window.location.href,              
            type: "POST",          
            data: data,
            dataType: 'json', 
            beforeSend: function(request) {
                request.setRequestHeader("X-CSRFToken", csrftoken);
            },
            success: function(data, textStatus, xhr){
                change_email(data.newEmail);
            }
        });
    });

});