
<!-- javascript code -->
<script>
	import { initializeApp, getApps, getApp } from "firebase/app";
	import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
	import { firebaseConfig } from "../lib/firebaseConfig"
	import {browser} from "$app/environment"

	// inittialize firebase app by checking if browser is ready and app isn't already initialized
	let firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp())
	let db = browser && getFirestore()

	// reference todo collection
	const colRef = browser && collection(db, "todos")

	let todos = []

	// Init todos from database on frontend
	const fbAddtodo = browser && onSnapshot(colRef, (querySnapshot) => {
		let fbTodos = []
		querySnapshot.forEach((doc) => {
			// Add db todos one by one to fbTodos array
			let todo = { ...doc.data(), id: doc.id}
			fbTodos = [todo, ...fbTodos]
		})
		// set global todos variable to database data
		todos = fbTodos
	})

	let task = ""
	

	// Add a todo by adding a document to collection
	const addTodo = () => {
		// This is the code if not using firebase
		// let todo = {
		// 	task: task,
		// 	isComplete: false,
		// 	createdAt: new Date()
		// }
		// if (todo.task === "") return
		// todos = [todo, ...todos]
		// task = ""

		// Add document to firebase by entering it into the todos collection
		addDoc(collection(db, "todos"), {
			task: task,
			isComplete: false,
			createdAt: new Date()
		})
		// Reset task once submitted
		task = ""
	}

	// Mark todo as complete by updating isComplete for relevent document
	const markTodoAsComplete = async (item) => {
		await updateDoc(doc(db, "todos", item.id), {
			// Set to opposite of before
			isComplete: !item.isComplete
		})
		 
	}

	// Delete todo from DB
	const deleteTodo = async (item) => {
		// const deletedItem = todos[index]
		// todos = todos.filter((item) => item != deletedItem)

		// Simply delete document by id
		await deleteDoc(doc(db, "todos", item.id))
	}

	// handles functionality when Enter is pressed
	const keyIsPressed = (event) => {
		if(event.key === "Enter") {
			addTodo()
		}
	}
</script>


<!-- Main HTML -->
<!-- bind:value sets task value to current input value -->
<input type="text" placeholder="Add a task" bind:value={task}/>
<!-- Add todo function on click -->
<button on:click={addTodo}>Add</button>
<!-- List todos -->
<ol>
	<!-- Svelte syntax for listing items with for loop -->
	{#each todos as item}
		<li>
			<!-- Class for referencing CSS -->
			<span class:complete={item.isComplete}>
				<!-- Display each item task value -->
				{item.task}
			</span>
			<span>
				<button style="margin-left: 4px; 
											background-color: transparent; 
											border: none; 
											cursor: pointer" on:click={() =>
											// Call todo update syntax
												 markTodoAsComplete(item)}>
						<!-- Syntax for ternary operation syntax -->
						{
							
							item.isComplete ? "🟢" : "✅"
						}
				</button>
				<!-- Call delete function -->
				<button style="background-color: transparent; 
											border: none;
											cursor: pointer" on:click={() => 
											deleteTodo(item)}>
					🗑
				</button>
			</span>
		</li>
		<!-- Default for no todos -->
		{:else}
			<p>No todos found</p>
	{/each}
</ol>

<!-- Add event listeners with svelte -->
<svelte:window on:keydown={keyIsPressed} />

<!-- CSS -->
<style>
	.complete {
		text-decoration: line-through;
	}
</style>