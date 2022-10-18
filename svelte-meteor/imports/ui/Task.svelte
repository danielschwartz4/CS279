<script>
  import { TasksCollection } from '../api/TasksCollection';

  export let task;

  const toggleChecked = () => {
    // Set the isChecked property to the opposite of its current value
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked }
    });
  };

   const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>
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
