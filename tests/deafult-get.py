import requests


url = "http://localhost:3000" + "/users"

response = requests.get(url)
print(response.json())