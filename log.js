
var password;
var name;
var p=[];
function signup()
{
 
  var email=document.getElementById("inputemail").value;
var password=document.getElementById("inputpass").value;
  //save on local storage
  var User={
      useremail:email,
      userpassword:password,
      product:p
  
  };  
  var  n=User.useremail.split("@");
   name=n[0];
   console.log(name);
alert("Thanks for signing in "+name+ " ...!");
  if(User.useremail==="")
  {
    alert("please enter email address");
  }
  if(User.userpassword==="")
  {
    alert("please enter password");
  }
  var abc=JSON.stringify(User);
  localStorage.setItem(name,abc);

location.href="project.html";
}
function signin()
{
  var email=document.getElementById("inputemail").value;
  var password=document.getElementById("inputpass").value;
  //save on local storage
  var User={
      useremail:email,
      userpassword:password,
      product:p
  };  

  if(User.useremail==="")
  {
    alert("please enter email address");
  }
  if(User.userpassword==="")
  {
    alert("please enter password");
  }
  var n=User.useremail.split("@");
  name=n[0];

var value=localStorage.getItem(name);


    if(value ==null)
    {
        alert("The email address that you've entered doesn't match any account.");
    }
    else{
       var format= JSON.parse(value);
   if(format.useremail===User.useremail && format.userpassword===User.userpassword )
   {
    alert("Thank You For Signing In "+name+ "....:)"); 
    location.href="project.html";   
   }
   else{
         alert("Please Enter Valid Email Or Password");
         location.href="login.html";
       }
    }
   
}
function info()
{

    //save on local storage
    var User={
        useremail:email,
        userpassword:password,
        product:p
    };
    if(User.useremail=="")
    {
        location.href="login.html";
    } 
    else{
      location.href="cart.html";
    }
  
}
var array=[];
function addtocart(eve)
 {
  var cart= document.getElementById("trd");

  var message=document.createElement("li");
  message.setAttribute("id","message");
    var message1= document.createTextNode("Item added to cart successfully");
message.appendChild(message1);
cart.appendChild(message);
var c=setInterval(() => {
    document.getElementById("message").style.display="none";
}, 2000);
  var val=localStorage.getItem(name);
  var data=JSON.parse(val);
var p=eve.target.parentElement.parentElement;
var pr=eve.target.parentElement;
var price=pr.childNodes[7].innerText;
var r=p.firstChild;

var src=r.getAttribute("src");
//console.log(r);
//console.log(src);
var productname=r.getAttribute("alt");
var pr=[productname,src,price];
array.push(pr);
data.product=array;
localStorage.setItem(name,JSON.stringify(data));
 }


 