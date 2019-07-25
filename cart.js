
function cart()
{
var id= document.getElementById('add');
var title=document.createElement("h3");
var get=localStorage.getItem(name);
var data=JSON.parse(get);
var image1=document.createElement("img");
image1.setAttribute("src","project image/userlogo.png");
image1.setAttribute("id","login");
var text=document.createTextNode("User Name:"+name);
title.appendChild(image1);
title.appendChild(text);

id.appendChild(title);
var table=document.createElement("table");
id.appendChild(table);
for(i=0;i<data.product.length;i++)
{
    var tr=document.createElement("tr");

for(j=0;j<3;j++)
{
    if(j==1)
    {
        var tde=document.createElement("td");
    var image=document.createElement("img");
    image.setAttribute("src",data.product[i][j]);
    tde.appendChild(image);
   
    }
    else if(j==0)
 {
    var td=document.createElement("td");
    var text1=document.createTextNode("Product Name:"+data.product[i][j]);
    td.appendChild(text1);
    tr.appendChild(td);
 }
    else if(j==2){
     var td=document.createElement("td");
     console.log(data.product[i][j]);
    var text=document.createTextNode(data.product[i][j]);
    td.appendChild(text);
    tr.appendChild(td);
    tr.appendChild(tde);
    }
    table.appendChild(tr);
}
}
}