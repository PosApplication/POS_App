function validateProductName()
    {
    	var val=document.getElementById("productname").value;	
    	if(!val.match(/^[0-9A-Za-z\s]+$/))

    		{
    		var text="* Product name should not contain special characters";
    		document.getElementById("id1").innerHTML = text;
    		}
    	else
    		{
    		return(false);
    		}
    	return true;
    	}
/*function validatecode(productCode)
{
var myArray=productCode.value.split('');
if(myArray[0]===3 || 4 || 5 || 6 || 7 || 8)
	{
	var step1=0;
	var i,r,sum;
	for(i=1;i<11;i++)
		{
		step1=step1+myArray[i];
		}
	do{
		if(step1<10)
			{
			if(step1===myArray[myArray.length-1])
				{
				
				}
			else
				{
				alert('last digit is not matched');
				}
			}
		else 
		{
			r=step1%10;
			sum=sum+r;
			step1=step1/10;
		}
	}while(sum>10);
	if(sum===myArray[myArray.length-1])
	{
		alert('Valid barcode');
		}
	else
		{
		alert('invalid code');
		}
	}
}*/
function checkProductCode() {
	var val=document.getElementById("productCode").value;
	var pattern = /^[3-8]{1}[0-9]{11}$/;
	if (val.match(pattern)) {
		var lastDigit = val % 10;
		var firstElevenDigits = Math.floor(val / 10);
		var twoToElevenDigits = firstElevenDigits % Math.pow(10, 10);
		var numList = [];
		for (var i = 0; twoToElevenDigits > 0; i++) {

			numList[i] = twoToElevenDigits % 10;
			twoToElevenDigits = Math.floor(twoToElevenDigits / 10);

		}
		var sum = 0;
		for (var j = 0; j < numList.length; j++) {
			sum = sum + numList[j];
		}
		if (sum >= 10) {
			var sum0 = sum % 10;
			var sum1 = Math.floor(sum / 10);
			sum = sum0 + sum1;
		}
		if (sum == lastDigit) {

		} else {
			document.getElementById("ProductCodeError").innerHTML = "* Invalid BarCode";
			count = count + 1;

		}
	} else {
		document.getElementById("ProductCodeError").innerHTML = "* length mustbe 12 digits and must start with 3-8 range";
		count = count + 1;

	}

}
function validatePrice() {
	var val=document.getElementById("productprice").value;
	var pattern = /^[0-9]+(\.[0-9]{1,2})?$/;
	if (val.match(pattern)) {
		
	} else {
		document.getElementById("PriceError").innerHTML = "* please enter valid decimal value";
		count = count + 1;

	}
}
function providetax()
{
	var tax, i;
	var price=document.getElementById("productprice");
	var val=price.value;
	var e=document.getElementById("producttype");
	var type=e.options[e.selectedIndex].value;
	//for (i = 1; i < e.length; i++)
	if(type == "Foods & confectionary")
	{	
		tax=val/10;
		}

	else if(type == "House Hold Items")
		{
		tax=val/5;
		}
	else if(type == "Cosmetics")
		{
		tax=val/18;
		}
	else if(type == "Books")
		{
		tax=val/5;
		}
	else
		{
		alert("Select some value");
		}
	document.getElementById("input").value = tax;

}
  
function checkform()
{
	if (document.feedback.field.value == '') {
		return false;
	}
	else if(document.feedback.field.option.value==0){
		return false;
	}
	return true;
}
