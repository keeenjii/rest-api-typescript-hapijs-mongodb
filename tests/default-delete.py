import requests

url = 'http://localhost:3000/users/' + '601be9c3a5eddf3354507dd2'
response = requests.delete(url)
print(response.json())