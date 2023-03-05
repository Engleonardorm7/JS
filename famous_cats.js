// En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

// Recibirás un array de objetos que incluirán las siguientes propiedades:

// name: nombre del gatito.
// followers: un array de números, donde cada uno representa los seguidores de cada red social.
// Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: findFamousCats([
//   {
//     name: "Luna",
//     followers: [500, 200, 300]
//   },
//   {
//     name: "Michi",
//     followers: [100, 300]
//   },
// ])

// Output: ["Luna"]


function findFamousCats(cats) {



let total=0;
let max_followers=0;
let total_followers=[]
  for (let cat of cats){
      for(let followers of cat.followers){
        //console.log(followers);
        total+=followers;
      }
      total_followers[cat.name]=total;
      total=0;
      }
let famousCats = [];
  for (let cat in total_followers) {
      
    if(total_followers[cat]>max_followers){
        max_followers=total_followers[cat];
    }
    
  }
  for(let cat in total_followers){
      if(total_followers[cat]===max_followers)
      famousCats.push(cat)
  }
  return(famousCats);
        
}


console.log( findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
]))

