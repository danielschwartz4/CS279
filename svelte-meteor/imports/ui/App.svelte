<script>
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';

  let hideCompleted = false;
    
//   Function for hiding and revealing completed tasks
  const setHideCompleted = value =>  {
      hideCompleted = value;
  }

// Filter by completed
  const hideCompletedFilter = { isChecked: { $ne: true } };
 
// $: marks reactive statements

// useTracker is a meteor function to grab api data. TasksCollection.find retrieves from database
  $: tasks = useTracker(() => TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch());
  $: incompleteCount = useTracker(() =>TasksCollection.find(hideCompletedFilter).count());

//   Compose title for tasks left
  $: pendingTasksTitle = `${
          incompleteCount ? ` (${$incompleteCount} tasks left)` : ''
  }`;
  
</script>


<div class="app">
    <header>
        <div class="app-bar">
            <div class="app-header">
                <!-- Add tasks left variable -->
                <h1>📝️ To Do List {pendingTasksTitle}</h1>
            </div>
        </div>
    </header>

    <div class="main">
      <TaskForm />
        <div class="filter">
            <!-- Call hideCompleted function -->
            <button on:click={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
            </button>
        </div>

        <ul class="tasks">
            <!-- Display tasks, passing it in as prop to Task component -->
            {#each $tasks as task (task._id)}
                <Task task={task} />
            {/each}
        </ul>
    </div>
</div>