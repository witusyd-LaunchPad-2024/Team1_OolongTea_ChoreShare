document.getElementById("generateQuests").addEventListener("click", function() {
    // API endpoint and key
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBU-nCT4jYByluc1rLTGn8ln20mHYCfN9Y";
    
    // Request body
    const requestBody = {
        "contents": [
            {
                "parts": [
                    {
                        "text": "generate a chore with a title that sounds like a video game quest, and a 1 sentence instruction for the user to do. format it like Title: Instruction. Example: 'The Dusting of Forgotten Shelves: Wipe away the dust from shelves and surfaces, restoring them to their former glory'"
                    }
                ]
            }
        ]
    };
    
    // Make the API call
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        const questList = document.getElementById("questList");
        
        // Extracting the quest content
        const questContent = data.candidates[0].content.parts[0].text;
        const quests = questContent.split("\n\n");  // Split into individual quests
        
        // Loop through each quest and append it to the list
        quests.forEach(quest => {
            if (quest.trim() !== "") {
                // Split the quest into title and instruction
                const [title, instruction] = quest.split(":");

                // Create the new list item
                const listItem = document.createElement("li");
                listItem.classList.add("quest-item");

                // Create the <h3> element for the title
                const titleElement = document.createElement("h3");
                titleElement.textContent = title.trim();  // Trim to remove any extra spaces
                listItem.appendChild(titleElement);

                // Create the <p> element for the instruction
                const instructionElement = document.createElement("p");
                instructionElement.textContent = instruction.trim();
                listItem.appendChild(instructionElement);

                // Create the "Mark as Complete" button
                const completeButton = document.createElement("button");
                completeButton.classList.add("complete-btn");
                completeButton.textContent = "Mark as Complete";
                listItem.appendChild(completeButton);

                // Append the new quest item to the list
                questList.appendChild(listItem);
            }
        });
    })
    .catch(error => {
        console.error("Error fetching quests:", error);
    });
});
