function checkUserEntry()
{
var userEntry = document.getElementById('email').value;
if(userEntry.length == 0)
{
    throw new Error('please provide an email address');
}
else if(userEntry.indexOf('@')===-1)
{
    throw  new Error('please provide a valid email address');
}
}
function validateEntry()
{
try
{
    checkUserEntry();
}
catch(error)
{
    document.getElementById('console').innerHTML = error.message;
}
}

function ValidatePassword(password)
{
  try
  {
    //Make sure password has at least 5 characters
    if(password.length < 5 )
    {
      throw "SHORT";
    }

    //Make sure password has no more than 8 characters
    if(password.length > 8 )
    {
      throw "LONG";  //too many characters
    }

    //Password ok
    alert("Password Validated!");
  }
  catch(e)
  {
    if(e == "SHORT")
    {
        alert("Not enough characters in password!")
    }
    if(e == "LONG")
    {
        alert("Password contains too many characters!")

    }
  }
}
//-->
  
function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno)))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}
