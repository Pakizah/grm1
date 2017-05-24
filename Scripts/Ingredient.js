$('document').ready(function () {
    /* validation */
    $("#ingredient").validate({
        rules:
        {
            Name: {
                required: true,
            },
            Type: {
                required: true,
            },
            Image: {
                required: true,
            },
            Urdu: {
                required: true,

            },
            Unit: {
                required: true,

            }


        },
        messages:
        {
            Name: "Please Enter Ingredient Name",
            Image: "Upload an image(jpg,png)",
            Category: "Please Enter Category",
            Urdu: "Please Enter Urdu Name",
            Units:"Please provide respective Units",
        },
        submitHandler: submitForm()
    });
    /* validation */

    /* form submit */
    function submitForm() {
        var data = $("#ingredient").serialize();

        $.ajax({

            type: 'POST',
            async: false,
            url: '/Home/Ingredient',
            data: data,
            success: function (data) {
                //alert(data);
            }


        });
        return false;
    }
    /* form submit */

});