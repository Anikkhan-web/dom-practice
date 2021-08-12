// document.getElementsByTagName(h2)

const blog = document.getElementsByTagName('p');

for (let h1 of blog){
    console.log(h1);
    // h1.style.color="tomato"
    // h1.style.backgroundColor="salmon";
    h1.style.color="blue";
    
    h1.style.border="2px solid black";
    h1.style.borderRadius="10px";
    // h1.style.border="100px";

}

const li = document.createElement('li');
li.innerText='blog5';
const ul= document.getElementById('blog-list');
ul.appendChild(li)
const article = document.createElement('article');
const h3 = document.createElement('h3');
h3.innerText= " my awesome blog";
const p = document.createElement('p');
p.innerText = '212necessitatibus ut corrupti ipsam, doloremque repellendus accusantium quas libero a odit quaerat cum hic fugiat ad fugit praesentium nisi! Officiis nam totam delectus saepe repudiandae impedit maiores f212';
article.appendChild(h3);
article.appendChild(p);



// const blogDetails = document.getElementById("para");
// blogDetails.style.backgroundColor="salmon";
// blogDetails.style.color="white";
// blogDetails.style.padding="100px";
// blogDetails.style.marginBottom="100px";