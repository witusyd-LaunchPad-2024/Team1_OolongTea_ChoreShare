const quests = [
    "The Quest for the Perfect Coffee: Brew a delicious cup of coffee.",
    "The Hunt for the Lost Laundry: Sort all your laundry by color and type.",
    "The Battle Against the Clutter: Tidy and organize your space.",
    "The Quest for the Healthy Meal: Prepare a nutritious meal.",
    "The Dungeon of Emails: Tackle unread and overdue emails.",
    "The Side Quest of Self-Care: Take time to relax and recharge.",
    "The Challenge of the Social Circle: Reach out to a friend or family member.",
    "The Adventure of Learning Something New: Explore a new hobby or skill.",
    "The Quest for a Good Night's Sleep: Establish a relaxing bedtime routine."
];

document.getElementById('generateQuests').addEventListener('click', function() {
    const questList = document.getElementById('questList');
    questList.innerHTML = ''; // Clear previous quests

    // Shuffle the quests array and get a random number of quests (3-5 quests)
    const shuffledQuests = quests.sort(() => 0.5 - Math.random());
    const selectedQuests = shuffledQuests.slice(0, Math.floor(Math.random() * 3) + 3);

    // Create list items for each selected quest
    selectedQuests.forEach((quest, index) => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `quest${index + 1}`;

        const label = document.createElement('label');
        label.setAttribute('for', `quest${index + 1}`);
        label.textContent = quest;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        questList.appendChild(listItem);
    });
});
