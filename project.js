/*var slider=["apple.jpg","oppo1.jpg","nokia 2.jpg","s3.jpg"];
var div1=document.getElementById("slider");
var slider1=document.createElement("img");

for(i=0;i<slider.length;i++)
{  
    var imageadd="project image/"+slider[i];
    function call(img)
    {


    setInterval( () =>{
      
        slider1.setAttribute("src",img);console.log(img);} ,2000)
    }
call(imageadd);
}
div1.appendChild(slider1);*/
var slideIndex = 0;
showSlides();

function showSlides() {
  
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


 function dropdown()
  {
    var Phones=document.getElementById("phones");
  Phones.setAttribute("onclick","dropdown()");
    var phonelist=["Samsung","Nokia","Apple","Huawei","Oppo"];
    //var linklist=["Samsung.html","Nokia.html","Apple.html","Huawei.html","Oppo.html"]
    var opt=document.createElement("ul");
    opt.setAttribute("Class","phonelist");
    for(i=0;i<phonelist.length;i++)
     {
    var li1=document.createElement("li");
   li1.innerText=phonelist[i];
   li1.setAttribute("class","phlist");
   li1.setAttribute("id",phonelist[i]);
   if(phonelist[i]=="Samsung")
   {
  li1.setAttribute("onclick",`location.href="Samsung.html"`);
   }
   opt.appendChild(li1);
   Phones.appendChild(opt);
     }

  }
  
  function mouseout()
  {
    var c=document.getElementsByClassName("phlist");
    for(i=0;i<c.length;i++)
    {
      c[i].style.display="none";
    }
  }

