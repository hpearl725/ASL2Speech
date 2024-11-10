from pyt2s.services import stream_elements
import io
from pydub import AudioSegment
from pydub.playback import play
import sys

def play_voice(text, voice):
    data = stream_elements.requestTTS(text, voice.value)
    audio = AudioSegment.from_file(io.BytesIO(data), format="mp3")
    file_name = f"{voice.value}_{text}_output.mp3"
    audio.export(file_name, format="mp3")
    print(f"Audio file saved: {file_name}")
    play(audio)

def main():
    # try getting text from command line
    text = " ".join(sys.argv[1:])
    if not text:
        text = "Hello, world!"
    voice = stream_elements.Voice.Matthew
    try:
        play_voice(text, voice)
    except Exception as e:  
        print(f"Error playing audio: {e}")

if __name__ == "__main__":
    main()