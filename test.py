import requests
from datetime import datetime, timedelta
import time

current_time = datetime.now()
target_time = current_time + timedelta(seconds=60)

url = "http://localhost:8080/channel-service/api/health"

headers = {}  # You can add headers if needed
successCount = 0
errorCount = 0
while datetime.now() < target_time:
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        print(response.text)
        successCount += 1
    else:
        print(f"Error: {response.status_code}")
        errorCount += 1

print("start time: ", current_time)
print("end time: ", datetime.now())
print("Success Count: ", successCount)
print("Error Count: ", errorCount)
