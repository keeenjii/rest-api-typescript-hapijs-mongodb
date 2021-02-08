import requests

header = {
    'Content-Type':'application/json' 
}

body = {
        'languageCode':'BREZIL',
        'useSexagesimalCoordinates':True,
        'coordinateDecimalPrecision':'side',
        'showBatteriesSeparately': True,
        'unitSystem': 'SI',
    }

url = "http://localhost:3000" + "/users" +  "/601b1f247ec7693b34158ed2/biomapsPrefs"

response = requests.put(url, data=body)
print(response.text)
print(response.status_code)