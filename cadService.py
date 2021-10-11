import requests

url = "https://scheduletce.herokuapp.com/services/"

payload={
  'service': 'Monster Games',
  'description': 'Aqui você encontra todos os jogos de última geração em um só lugar',
  'is_active': 'true'
  }

#files=[]

headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0Mjk4NTEzLCJqdGkiOiI3MGYzNzM3YTQ4MjE0Y2NiYmY0ZjEyMmQ3YjgyMGY2MiIsInVzZXJfaWQiOjN9.FXJxj-6vTpVaLYULwAYnMTjKVOY9zM0kOu7RgbFibCc',
  'Cookie': 'csrftoken=pBlNpGwQ3XL5Gp1HqM5jp9GYXmt5W9QXAXnSQXky3JBUOCV2ZacBRTpizrryeRLN'
}

"""
, files=files
"""
response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
