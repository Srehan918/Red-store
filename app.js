var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight = "0px";

function menutoggle() {
    if(menuitems.style.maxHeight = "0px")
    {
        menuitems.style.maxHeight = "200px"
    }
    else {
        menuitems.style.maxHeight = "0px"
    }
}





//  js for toogle form 

   
      var LoginForm = document.getElementById("LoginForm");
      var RegForm = document.getElementById("RegForm");
      var Indicator = document.getElementById("Indicator");

      function register() {
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
      }
      function login() {
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
      }
  




    //   js for product gallery 

    
      var ProductImg = document.getElementById("ProductImg");
      var smallimg = document.getElementsByClassName("smallimg");

      smallimg[0].onclick = function () {
        ProductImg.src = smallimg[0].src;
      };
      smallimg[1].onclick = function () {
        ProductImg.src = smallimg[1].src;
      };
      smallimg[2].onclick = function () {
        ProductImg.src = smallimg[2].src;
      };
      smallimg[3].onclick = function () {
        ProductImg.src = smallimg[3].src;
      };