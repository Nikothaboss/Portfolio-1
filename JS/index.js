const projectsContainer = document.querySelector(".projects-container")
const introText = document.querySelector(".intro-text")

introText.style.top = `${(introText.clientWidth / 10) + 40}px`;
console.log(introText.clientWidth)

const projectTemplate = (portfolio) =>{
    let newDiv = ``
    for(project of portfolio){
        // console.log(project)

        newDiv += `
        <div class="card">
            <a href="singleProject.html?title=${project.objectName}">${project.image}</a>
            <div class="card-info">
                <h2>${project.title}</h2>
                <p>${project.shortDescription}</p>
                <h3>Technology used on this project:</h3>
                <ul class="tech-used">`
    
        for(tech of project.technologyUsed){
        newDiv += `<li>${tech}</li>`
        }
        newDiv += `
            </ul>
            </div>
            </div>
            `

        projectsContainer.innerHTML = newDiv

    }
}

projectTemplate(portfolio)

    
