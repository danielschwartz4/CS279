import { Meteor } from "meteor/meteor";
import App from "../imports/ui/App.svelte";

// Run the code in App.svelte when the server starts
Meteor.startup(() => {
  new App({
    target: document.getElementById("app"),
  });
});
