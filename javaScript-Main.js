


let  test = " Hello World";

 console.log( test)



    let  todos = [];

 /* todos.push(" Hodan Aden Abdi");
     
     todos.push(" Luula Aden Abdi");

     todos.push(" Cabdirashid Aden Abdi");

     todos.push(" Qaasim Aden Abdi");

     todos.push(" Khadar Aden Abdi");

     todos.push(" Kayse Aden Abdi");
 */



      //document.getElementById('test').innerHTML= todos;


       

            function display(){

              let listenItems =  document.getElementById('Todolist');
              listenItems.innerHTML = "";

       

              for ( let todo of todos){
     
               let elementList = document.createElement('li');
               elementList.textContent=todo;
 
                let deletBotton= document.createElement('button') 
                deletBotton.textContent= " delete "+ "X";
                deletBotton.classList.add('deleteBtn')

                deletBotton.onclick =()=>{
                  revomeItems(todo);
                }

              
                elementList.appendChild(deletBotton);
               listenItems.appendChild(elementList)
              

              }



            }


          function  addTodo(){

             let newTodo= document.getElementById('inputTodo').value ;
              todos.push(newTodo);
            
          
               display();

             
    
               
          }


           function revomeItems(todoRemove){

             let index = todos.indexOf(todoRemove);
             todos.splice(index, 1)

              display()


           }

           display()


  



          



    
           

    
   