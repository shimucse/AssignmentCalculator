


var operation1 ='', operation2='', str1='', str2='',str3 ='', firstTwoStringResult='', 
operationCount =0,toggle=0,equal, result='', fullstop=0, AfterOneRoundOperationClearDisplay=0;

function numberFunction(n)
{
       
        if(AfterOneRoundOperationClearDisplay == 1)
        {
        	DisplayClear();
        }
	    else if(n=='.')
	    {
	    	fullstop = 1;
	    }
	    if(n=='+' || n=='-' || n=='*' ||n=='/'){
	    	toggle++;
	    	if(toggle==1)
	    	{
	    		operation1 =n;
	    	}
	    	else{
	    		operation2 =n;
	    	}
	    	

	    }
	    else if(n=='=')
	    {
	    	if(fullstop ==1)
	    	{
	    		str1 = parseFloat(str1);
	    		str2 = parseFloat(str2);
	    		str3 = parseFloat(str3);
	    		console.log(str1 +' ' +str2 + ' ' +str3);
	    	}else
	    	{
	    		str1 = parseInt(str1,10);
	    		str2 = parseInt(str2,10);
	    		str3 = parseInt(str3,10);
	    		console.log(str1 +' ' +str2 + ' ' +str3);
	    	}	    	
	    	
	    	firstTwoStringResult = switchFun(str1,str2,operation1);
	    	switchFun(firstTwoStringResult,str3,operation2);
	    	AfterOneRoundOperationClearDisplay =1;


	    }
	    else if(n=='c')
	    {
	    	DisplayClear();
	    	display('0');
	    }
	    else{
		    	if(toggle==0)
				{
					str1 += n;		
					display(str1);	
				}
				else if(toggle==1){

					str2 += n;		
					display(str2);
				}
				else{
					str3 += n;		
					display(str3);
				}
	    }
	}

function addition(str1,str2)
{
	
	result = str1+str2;

	display(result);
	return result;

	
}
function subtraction(str1,str2)
{
   result = str1-str2;
	display(result);
	return result;
}
function multiplication(str1,str2)
{
	result = str1*str2;
	display(result);
	return result;
}
function division(str1,str2)
{
	result = str1/str2;
	display(result);
	return result;
}


function switchFun(str1,str2,operation)
{
	switch(operation)
	    	{
	    		case '+': firstTwoStringResult =addition(str1,str2);
	    			return firstTwoStringResult;
	    		break;

	    		case '-':firstTwoStringResult =subtraction(str1,str2);
	    			return firstTwoStringResult; 
	    		break;

	    		case '*':firstTwoStringResult = multiplication(str1, str2);
	    			return firstTwoStringResult;
	    		break;

	    		case '/':firstTwoStringResult = division(str1,str2);
	    			return firstTwoStringResult;
	    		break;
	    	}

}
function display(s){

	var element = document.getElementById("display");
    element.value = s;
}
function DisplayClear()
{
	operation1 ='', operation2='', str1='', str2='',str3 ='', firstTwoStringResult='', 
	operationCount =0,toggle=0,equal, result='', fullstop=0, AfterOneRoundOperationClearDisplay=0;

}