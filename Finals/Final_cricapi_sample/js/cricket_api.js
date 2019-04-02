const h5 = document.getElementById("Authors");

function createNode(element)
{
  return document.createElement(element);
}

function append(parent,el)
{
  return parent.appendChild(el);
}

function myfunction()
{

 $.get("https://cricapi.com/api/cricket?apikey=46PAzAbk0qfU459uEQolVHl4P843", function(matchdata) {
			matchdata.data.forEach(function(md) {

	 let yourHeading=createNode('h5'),
     span=createNode('span');
     span.innerHTML= md.description;
		       	
	 append(yourHeading,span)
     append(h5,yourHeading)
		          
	});
  });
}

function calender()
{
	const h5 = document.getElementById("Authors1");

	$.get("https://cricapi.com/api/matchCalendar?apikey=46PAzAbk0qfU459uEQolVHl4P843", function(matchdata) {
			      matchdata.data.forEach(function(md) {
        let yourHeading=createNode('h5'),
		span=createNode('span');
		span.innerHTML= md.name;
		          	
		append(yourHeading,span)
		append(h5,yourHeading)
		          
	   });		
    });
}