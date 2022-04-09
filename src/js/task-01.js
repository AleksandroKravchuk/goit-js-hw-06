console.log(document)

const categories = document.querySelector(`#categories `)
const categoriesEl = document.querySelectorAll(".item");
const categoriesTitle = document.querySelectorAll(".item h2");
const categoriesItem = document.querySelectorAll(".item ul");
// const listEl = categoriesItem[].querySelectorAll(`li`);

console.log(categoriesEl)
console.log(categoriesItem)

const categoriesNumb = categoriesEl.length;
console.log(`Number of categories:${categoriesNumb}`);


const calkCategoriesTitle = (items,lists) => {
    
    for (let item of items) {
        console.log(`Category:${item.textContent}`) 
    }
    for (let list of lists) {
        console.log(`Elements:${list.textContent}`) 
    }
}
calkCategoriesTitle(categoriesTitle,categoriesItem);



// const calkCategoriesEl = (items)=> {
//     for (const item of items) {
//         console.log(`Elements:${item.length}`) 
//     }
// }
// calkCategoriesEl( categoriesItem);
// const considersItems = () => {
    
// }


// console.log(listEl)
    


// console.log(`Category:${calkCategoriesTitle(categoriesTitle)}`);
// console.log(`Elements:${categoriesEl1}`)

