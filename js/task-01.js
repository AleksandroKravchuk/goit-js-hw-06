


const categoriesEl = document.querySelectorAll(".item");

const categoriesNumb = categoriesEl.length;
console.log(`Number of categories:${categoriesNumb}`);


 categoriesEl.forEach((item)=>console.log(`Category:${item.firstElementChild.textContent}
       Elements: ${item.lastElementChild.children.length} `)   ) 
 
   
         





