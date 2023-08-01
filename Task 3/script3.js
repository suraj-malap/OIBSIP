function valid()
{


    const taskTitle = document.getElementById('taskTitle');
      const taskDescription = document.getElementById('taskDescription');
      const titleText = taskTitle.value.trim();
      const descriptionText = taskDescription.value.trim();

      if (titleText !== '' && descriptionText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.className = 'taskItem';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskItem.appendChild(checkbox);

        const title = document.createElement('h3');
        title.textContent = titleText;
        taskItem.appendChild(title);

        const description = document.createElement('p');
        description.textContent = descriptionText;
        taskItem.appendChild(description);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
          taskItem.remove();
        };
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskTitle.value = '';
        taskDescription.value = '';
      }
    }

    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    taskDescription.addEventListener('keyup', function (event) {
      if (event.key === 'Enter' && event.shiftKey)
       {
        valid();
      }
    })
