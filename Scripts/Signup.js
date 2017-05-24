$('document').ready(function () {
    /* validation */
 /*   $.validator.addMethod(
             "UniqueEmail",
          $("#Email").change(function () {

              var email = $('#Email').val();
              $.getJSON("/Account/VerifyEmail?Email=" + email, function (result) {
                  if (result.msg == "Already Registered") {
                      $("#validity").text(result.msg);
                      response = false;
                  }
                  else {
                      response = true;
                      $("#validity").text("");
                  }
                  return response;
              });


          }))*/
    var response;
      $.validator.addMethod(
               "UniqueEmail",
               function (value, element) {
                   var email = $('#Email').val();
                   $.getJSON("/Account/VerifyEmail?Email=" + email, function (result) {
                    if (result.msg == "Already Registered") {
                        $("#validity").text(result.msg);
                        response = false;
                    }
                    else {
                        response = true;
                        $("#validity").text("");
                    }
                   
                   });
                   return response;
               },
               "asdfdh"
           ); 
           

    $("#register").validate({
        rules:
        {
            FirstName: {
                required: true,
                minlength: 3
            },
            LastName: {
                required: true,
                minlength: 3
            },
            Email: {
                email:true,
                required: true,
                UniqueEmail: true
                
                
                
            },
            Password: {
                required: true,
            }

        },
        messages:
        {
            FirstName: "Please Enter first name",
            LastName: "Please Enter last name",
            Email: {
                required: "Please provide a Email",
                UniqueEmail: "Please Enter valid Email . it is already used",
                email: "Please Enter valid Email "
            },
        },
        submitHandler: submitForm()
    });
    /* validation */



    /* form submit */
    function submitForm() {
        var data = $("#register").serialize();

        $.ajax({

            type: 'POST',
            async: false,
            url: '/Account/Login',
            data: data,
            success: function (data) {
                //alert(data);
            }


        });
        return false;
    }
    /* form submit */

});