import requests

header = {
    'Content-Type':'application/json' 
}

body = {
    'flightSpeedInKmPerHour': 10,
    'trackWidthInMeters': 10,
    'areaPaddingInMeters': 10,
    'releaseRate': 10,
    'flightHeightInMeters': 10,
    'mustConsiderRelief': 10
}

url = "http://localhost:3000" + "/users" +  "/601b1f247ec7693b34158ed2/biomapsPrefs/areaPrefs"

response = requests.put(url, data=body)
print(response.text)
print(response.status_code)