import requests

url = 'http://localhost:3000' + '/users/' + '601b1f247ec7693b34158ed2' + '/biomapsPrefs/areaPrefs'

response = requests.get(url)
print(response.json())
print(response.status_code)