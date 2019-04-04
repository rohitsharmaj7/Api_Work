function myFunction() {
  location.reload();
}

$.ajax({ 
	type: 'GET', 
	url: 'https://dog.ceo/api/breeds/image/random/4', 
	data: { get_param: 'value' }, 
	dataType: 'json',
	success: function (data) 
	{ 
	  for(i=0;i<data.message.length;i++)
	  {
	    console.log(data.message[i]);
	    $('#rohit'+i).attr("src",data.message[i]);
	  }
	}
});
