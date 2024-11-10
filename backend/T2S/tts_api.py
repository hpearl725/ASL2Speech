import requests
import base64
from pydub import AudioSegment
from pydub.playback import play
import io
import os

api_key = os.getenv('API_KEY')

# api_key = "Bearer ..."

if api_key is None:
    print("API key not found.")
else:
    print("API key found: ", api_key)

key_dict = {'Authorization': api_key}

url = "https://api.edenai.run/v2/audio/text_to_speech"

payload = {
    "providers": ["google"],
    "language": "en-US",
    "option": "FEMALE",
    "text": "When set to true, a new attribute original response will appear in the response object. There’s a way to measure the acute emotional intelligence that has never gone out of style.",
    "show_base_64": True,
    "show_original_response": False,
    "rate": 0,
    "pitch": 0,
    "volume": 0,
    "sampling_rate": 0
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": key_dict['Authorization']
}

response = requests.post(url, json=payload, headers=headers)
audio_data = response.json()['google']['audio']
audio_bytes = base64.b64decode(audio_data)

# Use pydub to handle audio
audio = AudioSegment.from_file(io.BytesIO(audio_bytes), format="mp3")
play(audio)