const assignmentsContainer = document.querySelector(".assignments");

console.log(assignmentsContainer);
// http://localhost:5500/
// Fetch the data
async function fetchAssignments() {
  try {
    const res = await fetch(
      "https://assignment-api-eta.vercel.app/api/assignments"
    );
    const result = await res.json();
    const assignments = result.data;
    displayAssignments(assignments);
  } catch (error) {
    console.log(error);
  }
}

function displayAssignments(assignments) {
  assignmentsContainer.innerHTML = "";
  assignments.forEach((assignment) => {
    const assHtml = `
    <a href="#" class="assignment">
        <h2>${assignment.title}</h2>
        <p>
          ${assignment.description}
        </p>
        <p>2024-5-10</p>
      </a>
    `;

    assignmentsContainer.insertAdjacentHTML("beforeend", assHtml);
  });
}

fetchAssignments();

//Display the Data
