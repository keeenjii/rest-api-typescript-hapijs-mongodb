import requests

header = {
    'Content-Type':'application/json' 
}

body = {
    'name':'leon',
    'email': 'teste@teste',
    'password': 'tralala',
    'biomapsPrefs': {
        'languageCode':'BREZIL',
        'useSexagesimalCoordinates':True,
        'coordinateDecimalPrecision':'side',
        'showBatteriesSeparately': True,
        'unitSystem': 'SI',
    }
}

url = "http://localhost:3000" + "/users"

response = requests.post(url, data=body)
print(response.text)
print(response.status_code)