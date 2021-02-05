import requests

url = 'http://localhost:3000/users/' + '601c0270eb79940234b7ca2b'
body = {
    'name': 'robert4574so'
}
response = requests.put(url, data=body)
print(response.text)