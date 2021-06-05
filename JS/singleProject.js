const getQS = document.location.search;
const params = new URLSearchParams(getQS);
const title = params.get("title");

const contentToPage = document.querySelector(".container")



let chosenObject =(project)=>{
    return project.objectName === title;
}


const singleProject = portfolio.find(chosenObject)
console.log(singleProject)

const singleProjectTemplate=()=>{
    contentToPage.innerHTML = `
        <p>${singleProject.title}</p>
        ${singleProject.image}
        <p>${singleProject.shortDescription}</p>`
}

singleProjectTemplate()