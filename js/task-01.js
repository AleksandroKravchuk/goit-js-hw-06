


const categoriesEl = document.querySelectorAll(".item");

const categoriesNumb = categoriesEl.length;
console.log(`Number of categories:${categoriesNumb}`);


const calkCategoriesTitle = (items) => {
 
    for (let item of items) {
        console.log(`Category:${item.firstElementChild.textContent}
       Elements: ${item.lastElementChild.children.length} `)    
}
}
calkCategoriesTitle(categoriesEl);


