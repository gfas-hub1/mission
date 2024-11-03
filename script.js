

    
  let tasks = [
    {
      "title" : "صلي على النبي محمد انجزها",
      "date" : "15/15/2024",
      "isDone" : false
    },
    
    {
      "title" : "Read a book",
      "date" : "15/15/2024",
      "isDone" : true
    },
    
    {
      "title" :"finish The End project",
      "date" : "15/15/2024",
      "isDone" : true
    },
    
    {
      "title" : "End JavaScri pt Learn",
      "date" : "15/15/2024",
      "isDone" : true
    },
    {
      "title" : "Finish C# & .net ",
      "date" : "15/15/2024",
      "isDone" : true
    },
    {
      "title" : "Finish Dart & Flutter",
      "date" : "15/15/2024",
      "isDone" : 1
    },
   {
      "title" : "Finish Learn Kotlin",
      "date" : "15/15/2024",
      "isDone" : true
    },
  ]
  function getTaskFromStorage() {
    let  retrievedTask  = JSON.parse(localStorage.getItem("tasks"));
    
    tasks = retrievedTask ?? []
    
  }
  getTaskFromStorage();
  function fillTaskOnthePage() {
    
  
    document.getElementById("tasks").innerHTML =""
    let index = 0;
    for (task of tasks) {
    let content = `
  <!--<!-- Task -->
          <div class="task ${task.isDone ? 'done' : ''}">
            <!--Task info-->
            <div style="width: 70%; ">
              <h3>${task.title}</h3>
              <div>
                <span>
                  ${task.date}
                </span>
              </div>
            </div>
            <!--Task info-->
            
            <!--Task Actions-->
            <div style="display: flex; justify-content: space-between; align-items: center ;  width:50%;">
              <button onclick="deletTask(${index})" class="circular" style="background: rgba(114,0,0); color: white;">🗑️</button>
              ${task.isDone ? `
                <button onclick="completeTask(${index})"  class="circular" style="background: rgb(118, 0 , 101); color: white;">❌</button>
              ` : `

              <button onclick="completeTask(${index})"  class="circular" style="background: rgba(0,150,30); color: white;">✅</button>
              `}
              <button onclick="editTask(${index})" class="circular" style="background: rgba(0,16,197,0.692); color: white;">E</button>
            </div>
            <!--Task Actions-->
          </div>
          <!-- Task --> </br>
          `
          document.getElementById("tasks").innerHTML += content;
          index++;
    }
  }
  fillTaskOnthePage();
  
  
  
 
  document.getElementById("add-btn").addEventListener("click", function () {
    let now = new Date();
    let date = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() + " ||  "+ now.getHours() + ":" + now.getMinutes();
    
    let taskName = prompt("Enter the projet name : ");
   
    
    let taskObj = {
      "title" : taskName,
      "date" : date,
      "isDone" : false
    }
    if (taskName == null) {
      
    }
    else if (taskName == "") {
      
    }
    else {
      tasks.push(taskObj);
      storeTasks();
      fillTaskOnthePage();
    }
  })
  
  
  function deletTask(index) {
    let task = tasks[index]; 
   let isConfirm = confirm("Are you sure to delet the : " + task.title) ;
   if (isConfirm ) {
     tasks.splice(index, 1);
     
     storeTasks();
    
     fillTaskOnthePage();
   } 
    
  }
 
function editTask(index) {
  let task = tasks[index]; 
  let newTaskTitle = prompt("please enter the new task name: ", task.title);
  if (newTaskTitle == null) {
    
  }
  else if (newTaskTitle == "") {
    
  }
  else {
    task.title = newTaskTitle;
    storeTasks();
  }
  fillTaskOnthePage();
  
}
function completeTask(index) {
  let task = tasks[index];
  task.isDone = !task.isDone;
  /*if (task.isDone) {
    task.isDone = false;
  } else {
    task.isDone = true;
  }
  */
  storeTasks();
  fillTaskOnthePage();
}
  
  //------ Storage Function ----------
  function storeTasks() {
    // Tab to edit
    let taskString = JSON.stringify(tasks);
    
    localStorage.setItem("tasks", taskString);
  }
  