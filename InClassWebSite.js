/* Phuong Uyen Dang*/

function getMonthName(theMonth)
{
	switch(theMonth)
	{
		case 1:  mName="January"; break;
		case 2:  mName="February"; break;	
		case 3:  mName="March"; break;
		case 4:  mName="April"; break;
		case 5:  mName="May"; break;
		case 6:  mName="June"; break;
		case 7:  mName="July"; break;
		case 8:  mName="August"; break;	
		case 9:  mName="September"; break;
		case 10: mName="October"; break;	
		case 11: mName="November"; break;	
		case 12: mName="December"; break;				
	}
	return(mName);
}

function javascriptfunctionnamehere()
{

    var currentDay =  new Date();
    var theMonth = 0, todaysDate = "";  
    theMonth = currentDay.getMonth() + 1;
    monthName= getMonthName(theMonth);
    todaysDate = monthName + ' ' + currentDay.getDate() 
               + ', ' + currentDay.getFullYear();
    document.getElementById("showDate").innerHTML = todaysDate;	
}

function tableFunction()
{
    document.getElementById("texttable").style.color = "green";
    document.getElementById("texttable").style.borderWidth = "0.3em";
    document.getElementById("texttable").style.borderStyle = "dotted";
    document.getElementById("texttable").style.borderColor = "yellow";
}