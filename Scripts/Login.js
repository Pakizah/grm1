$('document').ready(function()
{ 
     /* validation */
	 $("#login").validate({
      rules:
	  {
			Email: {
		    required: true,
            email: true
			},
			Password: {
		    required: true,
			minlength: 5
			},
		
			
	   },
       messages:
	   {
            Email: "Please Enter Email",
            Password:{
                      required: "Please provide a valid password",
                      minlength: "5 characters"
                     },
       },
	   submitHandler: submitForm()	
       });  
	   /* validation */
	   
	   /* form submit */
	   function submitForm()
	   {		
				var data = $("#login").serialize();
				
				$.ajax({
				
				type : 'POST',
				async: false,
				url: '/Home/Dashboard',
				data : data,
				success :  function(data)
						{						
							//alert(data);
						}
									
									
				});
				return false;
		}
	   /* form submit */ 

});