document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inputForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent traditional form submission

    const formData = new FormData(form);

    // Log the form data for debugging
    console.log("this is the formdata in Script.js");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Received data from server:", data); // Debugging line
        // Update output fields here
        document.querySelector("#totalArea").value = data.totalArea;
        document.querySelector("#plasterNeeded").value = data.plasterNeeded;
        document.querySelector("#contingencyNeeded").value =
          data.contingencyNeeded;
        document.querySelector("#totalPlasterNeeded").value =
          data.totalPlasterNeeded;
        document.querySelector("#bagsRequired").value = data.bagsRequired;
      })
      .catch((error) => console.error("Error:", error));
  });
});
