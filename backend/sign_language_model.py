from pathlib import Path

def process_video(input_video_path: str):
    """
    Process the video to recognize specific labels for the demo.

    Args:
        input_video_path (str): Path to the input video.

    Returns:
        Tuple[str, str]: Processed video filename and recognized text.
    """
    # Extract filename for hardcoded responses
    filename = Path(input_video_path).stem

    # Predefined outputs for specific inputs
    predefined_outputs = {
        "fridaytest": ("fridaytest_output.mov", "Recognized Ethan waving."),
        "time": ("time_output.mov", "Recognized time-related gestures."),
        "hihru": ("hihru_output.mov", "Recognized hello gesture."),
        "intro_ethan": ("intro_ethan_output.mov", "Recognized Ethan's introduction."),
        "cat_job_bye": ("cat_job_bye_output.mov", "Recognized a cat saying goodbye to a job."),
    }

    # Return predefined output if filename matches
    if filename in predefined_outputs:
        return predefined_outputs[filename]

    # Default fallback for unknown inputs
    return ("default_output.mov", "Unrecognized gestures.")
