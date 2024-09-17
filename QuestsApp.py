import requests
import json

# Define the API key and URL
api_key = 'AIzaSyBU-nCT4jYByluc1rLTGn8ln20mHYCfN9Y'
url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={api_key}'

# Define the payload
payload = {
    "contents": [
        {
            "parts": [
                {
                    "text": '''Generate a task for me to do and make the title sound like a video game quest. Give a 1 sentence instruction for the task.
                    Make the task something productivity related a person can do to improve their life.
                    Here is an example of the format and style:
    "The Battle Against the Clutter: Tidy and organize your space."
    Leave it plain text with no formatting.
                    '''
                }
            ]
        }
    ]
}

# Function to get a single text response from the Gemini API
def get_gemini_response():
    response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})
    if response.status_code == 200:
        result = response.json()
        try:
            candidates = result.get('candidates', [])
            if candidates:
                return candidates[0]['content']['parts'][0]['text']
        except (KeyError, IndexError):
            return "No text content available."
    else:
        return f"Request failed with status code: {response.status_code}"

# Get 5 quests from the Gemini API
quests = [get_gemini_response() for _ in range(5)]

# Generate the HTML content
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quests of the Day</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Quests of the Day</h1>
        <button id="generateQuests" class="generate-btn">Generate Quests!</button>
        <ul class="quest-list" id="questList">
"""

# Add each quest as a list item
for quest in quests:
    html_content += f"<li>{quest}</li>\n"

# Close the HTML structure
html_content += """
        </ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
"""

# Write the HTML content to a file
with open('output.html', 'w') as html_file:
    html_file.write(html_content)

print("HTML file 'output.html' created successfully!")