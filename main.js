function validate()
{
  var username = document.getElementById("user");
  var firstname=document.getElementById("first");
  var lastname=document.getElementById("last");
  var age=document.getElementById("age");
  var address=document.getElementById("add");
  var password=document.getElementById("pass")
  var regex=/[a-zA-Z]*s/;

      if(username.value.trim()=="" && regex.test(username) )
      {  
          username.style.border="solid 1px red ";
          alert("valid usename");
            document.getElementById("wronguser").style.visibility="visible";
              return false;
      }
           else if(firstname.value.trim()=="" )
          {  
              firstname.style.border="solid 1px red ";
                 document.getElementById("wrongfirst").style.visibility="visible";
                   return false;

          }
              else if(lastname.value.trim()=="" )
              {  
                  lastname.style.border="solid 1px red ";
                    document.getElementById("wronglast").style.visibility="visible";
                       return false;
              }
                  else if(age.value.trim()=="" )
                  {  
                      age.style.border="solid 1px red ";
                        document.getElementById("wrongage").style.visibility="visible";
                          return false;
                  }
                        else if(address.value.trim()=="" )
                        {  
                            address.style.border="solid 1px red ";
                              document.getElementById("wrongaddress").style.visibility="visible";
                                return false;
                        }
                           else if(password.value.trim()=="" )
                          {  
                                password.style.border="solid 1px red ";
                                  document.getElementById("wrongpassword").style.visibility="visible";
                                    return false;
                          }    
                              else
                              {
                                  return true;
                              }
                    

}

  