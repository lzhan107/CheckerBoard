/*This function is used for displaying playernames from the text field*/
function showChecker(){
	/*Variables for storing the name fields*/
	var name1 = document.getElementById("namefield1").value;
	var name2 = document.getElementById("namefield2").value;
	/*End*/
	/*Variables for storing text values of each cell*/
	var square1 = document.getElementById("1").innerHTML;
	var square2 = document.getElementById("2").innerHTML;
	var square3 = document.getElementById("3").innerHTML;
	var square4 = document.getElementById("4").innerHTML;
	var square5 = document.getElementById("5").innerHTML;
	var square6 = document.getElementById("6").innerHTML;
	var square7 = document.getElementById("7").innerHTML;
	var square8 = document.getElementById("8").innerHTML;
	var square9 = document.getElementById("9").innerHTML;
	/*End*/
	var array = new Array(square1,square2,square3,square4,square5,square6,square7,square8,square9);
	/*Generate random number integer number from 1 to 9
	 *for randomly populating the each cells of the table.
	 */
	var number = Math.round(Math.random()*8) + 1;

	if ((array[number] = " ") && (name1 != " "))
	{
		if (number == 1)
		{
			document.getElementById("1").innerHTML = name1;
		}
		if (number == 2)
		{
			document.getElementById("2").innerHTML = name1;
		}
		if (number == 3)
		{
			document.getElementById("3").innerHTML = name1;
		}
		if (number == 4)
		{
			document.getElementById("4").innerHTML = name1;
		}
		if (number == 5)
		{
			document.getElementById("5").innerHTML = name1;
		}
		if (number == 6)
		{
			document.getElementById("6").innerHTML = name1;
		}
		if (number == 7)
		{
			document.getElementById("7").innerHTML = name1;
		}
		if (number == 8)
		{
			document.getElementById("8").innerHTML = name1;
		}
		if (number == 9)
		{
			document.getElementById("9").innerHTML = name1;
		}
	}
	
	/*Generate random number integer number from 1 to 9
	 *for randomly populating the each cells of the table.
	 */
	var number2 = Math.round(Math.random()*8) + 1;
	if ((array[number2] = " ") && (name2 != " "))
	{
		if (number2 == 1)
		{
			document.getElementById("1").innerHTML = name2;
		}
		if (number2 == 2)
		{
			document.getElementById("2").innerHTML = name2;
		}
		if (number2 == 3)
		{
			document.getElementById("3").innerHTML = name2;
		}
		if (number2 == 4)
		{
			document.getElementById("4").innerHTML = name2;
		}
		if (number2 == 5)
		{
			document.getElementById("5").innerHTML = name2;
		}
		if (number2 == 6)
		{
			document.getElementById("6").innerHTML = name2;
		}
		if (number2 == 7)
		{
			document.getElementById("7").innerHTML = name2;
		}
		if (number2 == 8)
		{
			document.getElementById("8").innerHTML = name2;
		}
		if (number2 == 9)
		{
			document.getElementById("9").innerHTML = name2;
		}
	}
}
