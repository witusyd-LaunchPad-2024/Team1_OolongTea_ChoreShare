import requests
import json

# Define the API key and URL
api_key = 'YOUR API KEY'
url = f'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={api_key}'

# Define the payload
payload = {
    "contents": [
        {
            "parts": [
                {
                    "text": "generate a productivity related task with a title that sounds like a video game quest, and a 1 sentence instruction for the user to do"
                }
            ]
        }
    ]
}

# Send the request to the Gemini API
response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'})

# Check if the request was successful
if response.status_code == 200:
    result = response.json()
    # Extract relevant information from the result if needed (e.g., content)
    content = json.dumps(result, indent=4)
    
    # Create the HTML content
    html_content = f"""
    <html>
    <head>
        <title>Gemini API Response</title>
    </head>
    <body>
        <h1>API Response:</h1>
        <pre>{content}</pre>
    </body>
    </html>
    """

    # Write the HTML content to a file
    with open('output.html', 'w') as html_file:
        html_file.write(html_content)
    
    print("HTML file 'output.html' created successfully!")
else:
    print(f"Request failed with status code: {response.status_code}")
