console.log(document)

const categories = document.querySelector(`#categories `)
const categoriesEl = document.querySelectorAll(".item");
const categoriesTitle = document.querySelectorAll(".item h2");
const categoriesItem = document.querySelectorAll(".item  ul ");
// const listEl = categoriesItem[].querySelectorAll(`li`);



console.log(categories)
console.log(categoriesItem.classList.add(`hdhdj`))

const categoriesNumb = categoriesEl.length;
console.log(`Number of categories:${categoriesNumb}`);


const calkCategoriesTitle = (items) => {
 
       
   
    for (let item of items) {
        console.log(`Category:${item.textContent}`)
        // for (let list of lists) {
        //     console.log(`Elements:${list}`) 
        // }
    }
}
calkCategoriesTitle(categoriesTitle);







const calkCategoriesEl = (items)=> {
    for (const item of items) {
        console.log(`Elements:${item.firstElementChild}`) 
    }
}
calkCategoriesEl( categoriesItem);



// console.log(listEl)
    


// console.log(`Category:${calkCategoriesTitle(categoriesTitle)}`);
// console.log(`Elements:${categoriesEl1}`)

