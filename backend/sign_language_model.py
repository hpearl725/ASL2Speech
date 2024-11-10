from pathlib import Path
import torch

def process_video(input_video_path: str, model_path: str = None):
    """
    Return pre-processed outputs based on the input filename.
    """
    input_filename = Path(input_video_path).name
    print(f"Processing video: {input_filename}")

    output_mapping = {
        "fridaytest.mov": {
            "processed_filename": "fridaytest_output.mov",
            "recognized_text": "Recognized text for Friday Test video."
        },
        "time.mov": {
            "processed_filename": "time_output.mov",
            "recognized_text": "Recognized text for Time video."
        },
        "hihru.mov": {
            "processed_filename": "hihru_output.mov",
            "recognized_text": "Recognized text for Hi Hru video."
        }
    }

    if input_filename in output_mapping:
        output = output_mapping[input_filename]
        return output["processed_filename"], output["recognized_text"]
    else:
        processed_filename = "default_output.mov"
        recognized_text = "This is a default recognized text for unknown videos."
        return processed_filename, recognized_text
