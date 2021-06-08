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
    <h1>${singleProject.title}</h1>
    <div class="imgPlusText">
        <img class="single-project-img" src="${singleProject.image}" alt="${singleProject.altText}">
        <p>${singleProject.shortDescription}</p>
        
    </div>
    <h2 class="funcMade">Functions I made in this project</h2>
    <ul class="funcMade">
    `   
    
    for(func of functions){
        singleProjectNewDiv += `
        
            <li>${func}</li>
        
        `    
    } 

    singleProjectNewDiv += `
    </ul>
    <h2 class="funcMade">Technology used in this project</h2>
    <ul class="funcMade">
    `

    for(tech of techUsed){
        singleProjectNewDiv += `
        <li>${tech}</li>
        `
    }

    singleProjectNewDiv += `
        </ul>
        <a class="btn single-project-btn" href="${singleProject.liveSiteLink}">Visit Site</a>
    `
    contentToPage.innerHTML = singleProjectNewDiv;  
}

singleProjectTemplate()