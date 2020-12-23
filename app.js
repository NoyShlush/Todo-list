let todoList = [];

let commend = prompt("Enter the action you want to execute");

while (commend != "quit") {
    if (commend == "new") {
        let todo = prompt("Enter your new todo");
        todoList.push(todo);
        console.log(`${todo} added to list`);
    } else if (commend == "list") {
        console.log("*****************************************");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}\n`);
        }
        console.log("*****************************************");
    } else if (commend == "delete") {
        let index = parseInt(prompt("Enter the index you want to delete"));
        if (!Number.isNaN(index)) {
            todoList.splice(index, 1);
            console.log("Todo removed");
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("Invalid action, try again");
    }
    commend = prompt("Enter the action you want to execute");
}
console.log("GOODBYE");