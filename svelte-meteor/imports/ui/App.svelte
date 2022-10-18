<script>
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';

  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  // $: tasks = useTracker(() => TasksCollection.find({}).fetch());
  // $: tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  let tasks = TasksCollection.find({}).fetch()
  console.log(tasks)
//  
</script>


<div class="container">
  <header>
    <h1>Todo List</h1>
  </header>

  <!-- <TaskForm /> -->

  <ul>
    {#each tasks as task (task._id)}
        <Task task={task} />
    {/each}
  </ul>
</div>