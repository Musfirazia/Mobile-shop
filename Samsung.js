function dropdown()
{
    var Phones=document.getElementById("phones");
  Phones.setAttribute("onclick","dropdown()");
  var phonelist=["Samsung","Nokia","Apple","Huawei","Oppo"];

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

function Specification(id,values)
{

    var properties=["Model Name:","Screen:","storage:","Ram:","Front Camera:","Back Camera:","Network:","Price:"];
var ids=document.getElementById(id);
var table=document.createElement("table");

ids.appendChild(table);
for(i=0;i<properties.length;i++)
{
var tr=document.createElement("tr");

td=document.createElement("td");
text=document.createTextNode(properties[i]);
td1=document.createElement("td");
text1=document.createTextNode(values[i]);

td1.appendChild(text1);
td.appendChild(text);

table.appendChild(tr);
tr.appendChild(td);
tr.appendChild(td1);
}
button1=document.createElement("button");
button1.innerText="ADD TO CART";
button1.setAttribute("class","cartbutton");
button1.setAttribute("onclick",`addtocart(event)`); table.setAttribute("id","trd");
table.appendChild(button1);
}
 var galaxyJ6=new Specification("galaxyj6",["Samsung galaxy J6","6 Inches","32GB","3GB","8mp LED flash","13mp Camera","4G Network","Rs: 27999"]);
 var galaxy8=new Specification("galaxy8",["Samsung galaxy S8","	5.8 Inches ","64GB built-in","4GB RAM ","8 MP","12 MP, autofocus, LED flash","4G Network","Rs: 79900"]);
 var galaxys3=new Specification("galaxys3",["Samsung galaxy S3","4.8 Inches","32 GB","1 GB","8 MP","Not Available","2G-3G network","Rs: 24000"]);
var galaxys10=new Specification("Samsungs10",["Samsung galaxy S10","5.8 Inches","128GB Storage / 256GB Storage","6GB RAM/ 8 GB RAM","10MP ","12MP Super Speed Dual Pixel /t 16MP Ultra Wide","4G Network","RS: 108,767"]);
 var galaxys9plus=new Specification("Samsungs9p",["Samsung galaxy S9+","6.2 Inches","64GB Storage / 256GB Storage","6GB RAM/ 8 GB RAM","12MP ","8MP Super Speed Dual Pixel /t 16MP Ultra Wide","4G Network","RS:87,840"]);
 var galaxys9=new Specification("Samsungs9",["Samsung galaxy S9","5.8 Inches","64GB Storage / 256GB /128GB Storage","4GB RAM","12MP ","8MP Super Speed Dual Pixel /t 16MP Ultra Wide","4G Network","RS:91000"]);