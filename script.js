function createNode(element) //function creates a node and passes an element inside the function
{
    return document.createElement(element); //create the specified element by this function
}

function append(parent,el) //pass the parent and the specified element that is to be appended
{
    return parent.appendChild(el);  //append the child to the specified parent that has been passed
}

const ul = document.getElementById("authors"); //authors is stored in the ul element
                                                                            
const url = 'https://randomuser.me/api/?results=10'; //request to the api


fetch(url)  //use fetch api
  .then((resp) => resp.json())    //return data in json
  .then(function(data){
        let authors = data.results; //grab data and create a new variable and grab the response
        return authors.map(function(author) {  //process the data
            
            let li = createNode('li'),   //create variable li
            img = createNode('img'),    //create variable img
            span = createNode('span');  //create variable span
            
            img.src=author.picture.medium; 
            
            span.innerHTML=`${author.name.first} 
            ${author.name.last}`;  
            
            append(li,img);  //append elements so results can be seen
            append(li,span);
            append(ul,li);
            
                          
        })
  })
  
  .catch(function(error){    //error catching funtion
      console.log(JSON.stringify(error)); //print error
  }); 