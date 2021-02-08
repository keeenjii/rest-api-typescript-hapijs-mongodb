import requests

url = 'http://localhost:3000/users/' + '601d48500cee8543a83b10c4'
response = requests.delete(url)
print(response.json())