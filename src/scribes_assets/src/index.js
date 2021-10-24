import { scribes } from "../../declarations/scribes";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with scribes actor, calling the greet method
  const greeting = await scribes.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
