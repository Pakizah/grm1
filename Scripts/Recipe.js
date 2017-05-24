$('document').ready(function () {
    /* validation */
    $("#recipe").validate({
        rules:
        {
            Title: {
                required: true,
            },
            Category: {
                required: true,
            },
            PrepTime: {
                required: true,
            },
            CookTime: {
                required: true,

            },
            Image: {
                required: true,
            },
            Ingredients: {
                required: true,

            },
            Quantity: {
                required: true,
            },
            Unit: {
                required: true,

            },
            Method: {
                required: true,
            }



        },
        messages:
        {
            Title: "Please Enter Recipe Title",
            PrepTime: "Enter Prep.Time in minutes",
            CookTime: "Enter Cook.Time in minutes",
            Image: "Upload an image(jpg,png)",
            Category: "Please Enter Category",
            Ingredients: "Please Add Ingredients from list",
            Quantity: "Please provide respective Quantity for each ingredient, comma seperated",
            Method: {
                required: "Please Enter Method",
            },
            Units: {
                required: "Please provide respective Units",
            },
        },
        submitHandler: submitForm()
    });
    /* validation */

    /* form submit */
    function submitForm() {
        var data = $("#recipe").serialize();

        $.ajax({

            type: 'POST',
            async: false,
            url: '/Home/Dasboard',
            data: data,
            success: function (data) {
                //alert(data);
            }


        });
        return false;
    }
    /* form submit */

});