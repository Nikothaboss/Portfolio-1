const getQS = document.location.search;
const params = new URLSearchParams(getQS);
const id = params.get("id");


const url = `https://nikolaireedlarsen.no/wp-json/wp/v2/posts/${id}?_embed=true`;

const singleBlogContainer = document.querySelector(".single-blog-container")

fetch(url, {
    "method": "GET",  
})
.then(response => response.json())
.then(data => singleBlogTemplate(data)) 
.catch(err =>{
    console.error(err);
}) 

const singleBlogTemplate =(blog)=>{
    document.title = "Blog" + " | " + blog.title.rendered;
    let images = blog._embedded["wp:featuredmedia"];
    let newDiv = ``;
    for(image of images){   
    newDiv += `
    <div class="single-post-img-container">
    
    <img src="${image.source_url}" alt="${image.alt_text}" class="single-post-img single-post-img-${blog.slug}">
    <div class="post-info">
        <div class="author">
            
            <p>Author: ${blog._embedded.author[0].name}</p>
        </div>
        <div class="posted-time">
            
            <p>Date: ${blog.date}</p>
        </div>
    </div>
    </div>
        <div class="content content-${blog.slug}">
        <h1 class="single-post-title-sm-scr">${blog.title.rendered}</h1>
        ${blog.content.rendered}
        </div>
    `
   
    
    };

    singleBlogContainer.innerHTML += newDiv;
    
};
