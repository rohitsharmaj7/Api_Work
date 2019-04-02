  let dropdown = $('#locality-dropdown');
  dropdown.empty();
  dropdown.append('<option selected="true" disabled>Select One Currency</option>');
  dropdown.prop('selectedIndex', 0);

  const url1='https://free.currencyconverterapi.com/api/v6/currencies?apiKey=745c4f922fcfa434363d';
  fetch(url1).then((resp)=>resp.json()).then(function(ListOfCurrencies){
  var json_data=ListOfCurrencies;
  var len = Object.keys(json_data.results).length;
  
  for(var i=0;i<len;i++)
  {
      dropdown.append($('<option class='+"rohit"+i+'></option>').attr('value',Object.keys(json_data.results)[i]).text(Object.keys(json_data.results)[i]));
  }

  })
  .catch(function(error){
    console.log(JSON.stringify(error));
  })

  let dropdown1 = $('#locality-dropdown1');
  dropdown1.empty();
  dropdown1.append('<option selected="true" disabled>Select One Currency</option>');
  dropdown1.prop('selectedIndex', 0);

  const url2='https://free.currencyconverterapi.com/api/v6/currencies?apiKey=745c4f922fcfa434363d';
  fetch(url2).then((resp)=>resp.json()).then(function(ListOfCurrencies1){
  var json_data1=ListOfCurrencies1;
  var len1 = Object.keys(json_data1.results).length;
  
  for(var i=0;i<len1;i++)
  {
          // console.log(Object.keys(json_data1.results)[i]);
          dropdown1.append($('<option></option>').attr('value',Object.keys(json_data1.results)[i]).text(Object.keys(json_data1.results)[i]));
  }

  })
  .catch(function(error){
    console.log(JSON.stringify(error));
  })
  
  var from;
  var to;

 $('#locality-dropdown').on('change', function() {
    from=this.value;
  });

  $('#locality-dropdown1').on('change', function() {
    to=this.value;
  });


function currencyConversion()
{
  var x=document.getElementById('rs');
  var y=document.getElementById('yourInput').value;
  const url = 'https://free.currencyconverterapi.com/api/v6/convert?q='+from+'_'+to+'&compact=ultra&apiKey=7bf58409adc7fc2cc363';

  fetch(url).then((resp)=>resp.json()).then(function(data){
  	let fetchConversion=data;
  
    console.log(y);
    console.log(from);
    console.log(to);
    console.log(from+"_"+to);
    var finalAnswer=fetchConversion[from+"_"+to];
    var rendor=finalAnswer*y;
    document.getElementById('rs').innerHTML= "Your Answer is : "+rendor;
    console.log(rendor);

  })
  .catch(function(error){
  	console.log(JSON.stringify(error));
  })
}