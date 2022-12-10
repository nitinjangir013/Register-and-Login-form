let main = document.getElementsByClassName('main')[0];
main.style.transform = 'scale(1)';
main.style.transition = 'all 1s';


let selectedDiv = document.getElementsByClassName('main_login_container')[0];
let selectedDiv1 = document.getElementsByClassName('main_signup_container')[0];

let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let invalid = document.getElementById('invalid');
let invalid1 = document.getElementById('invalid1');
let invalid2 = document.getElementById('invalid2');
let invalid3 = document.getElementById('invalid3');


var email_space = false;
var email_match_text = ["@gmail.com","@yahoo.com"];
var pass_result_num = false;

function openSignup()
{
	selectedDiv.style.transform = 'scale(0)';
	selectedDiv.style.transition = 'all 1s';
	selectedDiv1.style.transform = 'scale(1)';
	selectedDiv1.style.transition = 'all 1s';
}


function openLogin()
{
	selectedDiv.style.transform = 'scale(1)';
	selectedDiv.style.transition = 'all 1s';
	selectedDiv1.style.transform = 'scale(0)';
	selectedDiv1.style.transition = 'all 1s';
}


function emailCheck()
{
	var email_string= input.value;
	email_string = email_string.toLowerCase();
	var value1 = (email_string.length)-10;
    var value2 = (email_string.length);
    var  slice_email = email_string.slice(value1,value2);
    for(let i=0; i<value2; i++)
	{
		if(email_string[i]!=" ")
		{
			var email_space= true;
			invalid.style.display = "none";
		}
		else
		{
			email_space=false;
			input.style.border = "2px solid rgba(241, 33, 83, 1.0)";
			invalid.style.display = "block";
		}
	}
	if(email_space==true)
	{
		if(email_match_text[0]===slice_email || email_match_text[1]===slice_email)
		{
			email_result_num=true;
			input.style.border = "2px solid #000";
			invalid.style.display = "none";
		}
		else
		{
			email_result_num=false;
			input.style.border = "2px solid rgba(241, 33, 83, 1.0)";
			invalid.style.display = "block";
		}
	}
}

function emailCheck1()
{
	var email_string= input1.value;
	email_string = email_string.toLowerCase();
	var value1 = (email_string.length)-10;
    var value2 = (email_string.length);
    var  slice_email = email_string.slice(value1,value2);
    for(let i=0; i<value2; i++)
	{
		if(email_string[i]!=" ")
		{
			var email_space= true;
			invalid2.style.display = "none";
		}
		else
		{
			email_space=false;
			input1.style.border = "2px solid rgba(241, 33, 83, 1.0)";
			invalid2.style.display = "block";
		}
	}
	if(email_space==true)
	{
		if(email_match_text[0]===slice_email || email_match_text[1]===slice_email)
		{
			email_result_num=true;
			input1.style.border = "2px solid #000";
			invalid2.style.display = "none";
		}
		else
		{
			email_result_num=false;
			input1.style.border = "2px solid rgba(241, 33, 83, 1.0)";
			invalid2.style.display = "block";
		}
	}
}


function password() {
    var pass_str = input2.value;
	if(pass_str.length>=6)
	{
		pass_result_num=true;
		input2.style.border = "2px solid #000";
		invalid1.style.display = "none";
	}
	
	else
	{
		pass_result_num=false;
		input2.style.border = "2px solid rgba(241, 33, 83, 1.0)";
		invalid1.style.display = "block";
	}
}

function password1() {
    var pass_str = input3.value;
	if(pass_str.length>=6)
	{
		pass_result_num=true;
		input3.style.border = "2px solid #000";
		invalid3.style.display = "none";
	}
	
	else
	{
		pass_result_num=false;
		input3.style.border = "2px solid rgba(241, 33, 83, 1.0)";
		invalid3.style.display = "block";
	}
}