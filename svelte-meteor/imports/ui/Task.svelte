<script>
  import { TasksCollection } from '../api/TasksCollection';

  export let task;

  const toggleChecked = () => {
    // Set the isChecked property to the opposite of its current value on check click
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked }
    });
  };

  // Delete task by removing it from collection, indent by id
   const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<!-- Task component made up of check box, text, and delete box -->
<li style="align-items: center">
    <input
        type="checkbox"
        readonly
        checked={!!task.isChecked}
        on:click={toggleChecked}
    />
    <span style="margin-left: 8px">{ task.text }</span>
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
