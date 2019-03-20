function getfile(file,callback)
{
  var xhr=new XMLHttpRequest()
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null)
}
getfile("dynamic.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  bs(data.basics);
  cr(data.Career);
  edu(data.education);
  sk(data.skills);
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function bs(pro)
{
  var ig=document.createElement('image');
  ig.src=pro.image;
  left.appendChild(ig);
  main.appendChild(left);
  var nm=document.createElement('h2');
  nm.textContent=pro.Name;
  left.append(nm);
  var hr=document.createElement('hr');
  left.append(hr);
  var rl=document.createElement('h4');
  rl.textContent=pro.Roll;
  left.append(rl);
  var em=document.createElement('h4');
  em.textContent=pro.Email;
  left.append(em);
  var ph=document.createElement('h4');
  ph.textContent=pro.phone;
  left.append(ph);
}
function cr(pr)
{
  var head=document.createElement('h2');
  head.textContent="Resume";
  right.append(head);
  var hr=document.createElement('hr');
  right.append(hr);
  var hd=document.createElement('h2');
  hd.textContent="career objectives";
  right.append(hd);
  var hr=document.createElement('hr');
  right.append(hr);
  var inf=document.createElement('info');
  inf.textContent=pr.info;
  right.append(inf);
}
function edu(ed)
{
  var d=document.createElement('h2');
  d.textContent="Educational details";
  right.append(d);
  var hr=document.createElement('hr');
  right.append(hr);
  var table=document.createElement('table');
  let row='';
  row +="<tr>"+"<th>"+"sno"+"</th>" + "<th>"+"degree"+"</th>" +"<th>"+"institute"+"</th>" +"<th>"+"per"+"</th>" +   "</tr>";
  for(i in ed) {
    row +="<tr>"+"<td>"+ed[i].s_no+"</td>" + "<td>"+ed[i].degree+"</td>" +"<td>"+ed[i].institute+"</td>" +"<td>"+ed[i].per+"</td>" +   "</tr>";
  }
  table.innerHTML= row;
  right.appendChild(table);
  main.appendChild(right);
}
function sk(skl)
{
  var tc=document.createElement('h2');
  tc.textContent="Technical skills";
  right.append(tc);
  var hr=document.createElement('hr');
  right.append(hr);
  var ul=document.createElement('ul');
  right.append(ul);
  for(i in skl)
  {
    var li=document.createElement("li");
    li.textContent=skl[i].known;
    ul.append(li);
  }
}
