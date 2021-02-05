import requests

header = {
    'Content-Type':'application/json' 
}

body = {
    'name':'kenjee',
    'email': 'teste@teste',
    'password': 'tralala'
}

url = "http://localhost:3000" + "/users"

response = requests.post(url, data=body)
print(response.text)