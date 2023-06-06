let signUpField_ = document.getElementById("signUpField");
      let signInField_ = document.getElementById("signInField");
      let nameField_ = document.getElementById("nameField");
      let title = document.getElementById("title");

      let id_name = document.getElementById("id_name");
      let id_email = document.getElementById("id_email");
      let id_password = document.getElementById("id_password");


      signInField_.onclick = function () {
        validator(0);
        nameField_.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signUpField.classList.add("disable");
        signInField.classList.remove("disable");
        id_email.value ="";
        id_password.value = "";
      };
      signUpField_.onclick = function () {

        validator(1);
        nameField_.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signUpField_.classList.remove("disable");
        signInField_.classList.add("disable");
      };

  
        function validator(flag1) {
          if(flag1 == 1)
          {
            if (id_name.value.trim() == "") {
              alert("Enter valid Name");
              id_name.style.border = "1px solid red";
              return false;
            }
            } 

              else if (id_email.value.trim() == "") {
                alert("Enter valid email");
                id_email.style.border = "1px solid red";
                return false;
              }

              else if (id_password.value.trim() == "") {
                alert("Enter valid password");
                id_password.style.border = "1px solid red";
                return false;
              }
           else if (id_password.value.length < 5) {
            alert("Enter valid password");
            id_password.style.border = "1px solid red";
            return false;
          } 
          else 
          return true;
        }
        
      



