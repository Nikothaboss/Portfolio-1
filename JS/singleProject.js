const getQS = document.location.search;
const params = new URLSearchParams(getQS);
const title = params.get("title");

const contentToPage = document.querySelector(".single-project-container");

let chosenObject =(project)=>{
    return project.objectName === title;
};

const singleProject = portfolio.find(chosenObject);
const functions = singleProject.functionsMade;
const techUsed = singleProject.technologyUsed;


const singleProjectTemplate=()=>{
    singleProjectNewDiv = ``;
    

    singleProjectNewDiv +=   `
    
    <div class="imgPlusText">
        <div class="singleTitleContainer">
            <h1>${singleProject.title}</h1>
            <a href="${singleProject.gitRepo}"><i class="fab fa-github fa-2x single-project-git-icon"></i></a>
        </div>
        <div class="single-project-img-container">
            <img class="single-project-img" src="${singleProject.image}" alt="${singleProject.altText}">
        </div>
        <h2>About this project</h2>
        <hr>
        <p>${singleProject.shortDescription}</p>
        
    </div>
    <div class="funcMadeContainer">
        <h2 class="funcMade">Functions made:</h2>
        <ul class="funcMade">
    `   
    
    for(func of functions){
        singleProjectNewDiv += `
        
            <li>${func}</li>
        
        `    
    } 

    singleProjectNewDiv += `
    </ul>
    <h2 class="funcMade">Technology used:</h2>
    <ul class="funcMade">
    `

    for(tech of techUsed){
        singleProjectNewDiv += `
        <li>${tech}</li>
        `
    }

    singleProjectNewDiv += `
        </ul>
        </div>
        <a class="btn single-project-btn" href="${singleProject.liveSiteLink}">Visit Site</a>
    `
    contentToPage.innerHTML = singleProjectNewDiv;  
}

singleProjectTemplate()