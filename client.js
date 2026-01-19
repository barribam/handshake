import { getUserById } from "./mockServer.js";

const lookupBtn = document.getElementById("lookupBtn");
const loadingMessage = document.getElementById("loadingMessage");

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("department").value = "";
}

lookupBtn.addEventListener("click", async () => {
  const userId = document.getElementById("userIdInput").value;

  clearFields();
  lookupBtn.disabled = true;
  loadingMessage.style.display = "block";

  try {
    const user = await getUserById(userId);

    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("department").value = user.department;

  } catch (error) {
    alert(error);
  } finally {
    lookupBtn.disabled = false;
    loadingMessage.style.display = "none";
  }
});
