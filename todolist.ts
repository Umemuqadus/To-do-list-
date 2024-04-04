import inquirer from "inquirer";

async function to_do_list() {
    let list = []; 

    while (true) {
        const tODO = await inquirer.prompt([{
            name: 'choices',
            type: 'list',
            choices: ["addtask", "remove", "exit" ],
            message: 'Select'
        }]);

        

        if (tODO.choices === "addtask") {
            const add_task = await inquirer.prompt([{
                name: 'task',
                type: 'input',
                message: 'Add task'
            }]);
            list.push(add_task.task); 
            console.log('Task added:', add_task.task);

            const list_ = list;
            console.log(list_)
           
        }
       
        if (tODO.choices === "remove") {
            const remove = await inquirer.prompt([{
                name: 'remove',
                type: "list",
                choices: list, 
                message: 'Select the task to remove'
            }]);

            const itemToRemove : any = remove.remove;
            list = list.filter(item => item !== itemToRemove); 
            console.log('Task removed:', itemToRemove);
        }

        if (tODO.choices === "exit") {
            console.log('Thank you');
            break; 
        }
    }
}

to_do_list();
