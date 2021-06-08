// ! Project section
const projectsContainer = document.querySelector(".projects-container");
const projectTemplate = (portfolio) =>{
    let newDiv = ``;
    for(project of portfolio){
        newDiv += `
        <div class="card">
            <div class="card-img-container">
                <a href="singleProject.html?title=${project.objectName}">
                    <img class="single-project-img" src="${project.image}" alt="${project.altText}">
                </a>
            </div>
            <div class="card-info">
                <h2 class="card-project-title">${project.title}</h2>
                <p>${project.shortDescription}</p>
                <h3>Technology used:</h3>
                <ul class="tech-used">`;
    
        for(tech of project.technologyUsed){
        newDiv += `<li>${tech}</li>`;
        }
        newDiv += `
            </ul>
            </div>
            </div>
            `;

        projectsContainer.innerHTML = newDiv;
    }
}

projectTemplate(portfolio)

// ! Blog section
const blogPosts = document.querySelector(".blog-posts");
const url = "https://nikolaireedlarsen.no/wp-json/wp/v2/posts?_embed=true&per_page=3";
fetch(url, {
    "method": "GET",  
})
.then(response => response.json())
.then(data => blogTemplate(data)) 
.catch(err =>{
    console.error(err);
}) 

const blogTemplate =(posts)=>{
    let newPost = ``
    for(post of posts){
        let media = post._embedded["wp:featuredmedia"];
        const date = post.date.replace("T", " ").trimEnd();
        for(details of media){
        newPost += `
        <div class="post">
            <h2>Story of ${post.title.rendered}</h2>
            <span></span>
            <p>${details.caption.rendered}</p>
            <a href="#">Read More</a>
        </div>
        <hr>
        `;
        }

        console.log(date)
        
    }
    blogPosts.innerHTML += newPost
}

blogTemplate()

    
