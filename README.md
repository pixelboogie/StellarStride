# StellarStride

## Description
**StellarStride** is a sophisticated web application designed to perform text-to-speech conversion utilizing the Hugging Face.js Inference library. The core functionality of this application is to transform user-provided text into speech, leveraging state-of-the-art models available on the Hugging Face platform. This project demonstrates the integration of cutting-edge AI technologies into a web application, showcasing the potential of generative AI in enhancing user interactions and creating immersive digital experiences.

## Features
- **Text-to-Speech Conversion**: Converts textual input into speech using the `.textToSpeech()` method from the Hugging Face.js library.
- **Asynchronous Data Handling**: Ensures smooth user interaction by handling the text-to-speech conversion process asynchronously.
- **Dynamic Audio Rendering**: Loads the generated speech onto an HTML5 audio element dynamically, providing seamless playback of the generated speech.
- **Model Flexibility**: Allows users to experiment with various text-to-speech models available on the Hugging Face platform for different speech quality and characteristics.

## Core Technologies and Concepts
- **Hugging Face.js Inference Library**: Accesses pre-trained text-to-speech models and performs inference.
- **JavaScript**: Handles asynchronous operations, manipulates the DOM, and dynamically sets the audio source.
- **HTML5**: Structures the web interface, particularly the audio element that plays the generated speech.
- **BLOB (Binary Large Object)**: Manages binary data responses from the text-to-speech model.
- **Asynchronous Programming**: Ensures non-blocking operations during the text-to-speech conversion process.

## Installation

### Prerequisites
- A modern web browser that supports HTML5 and JavaScript.

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/StellarStride.git
   cd StellarStride

2. **Open the Project:**

    Open the index.html file in your preferred web browser.

3. **Run the Application:**

    - Enter your text into the provided input field.
    - Click the "Convert to Speech" button to initiate the text-to-speech conversion.
    - The generated speech will be played back using the HTML5 audio element.

## Usage

Enter Text: Type the text you wish to convert to speech in the input field.
Convert to Speech: Click the "Convert to Speech" button.
Listen to the Output: The application will generate speech from the text and play it back through the embedded audio player.

## Example Code

Here’s a snippet that demonstrates the core functionality of the application:

    async function convertTextToSpeech(text) {
    const response = await fetch('https://api-inference.huggingface.co/models/your-model-name', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${your_hugging_face_token}` },
        body: JSON.stringify({ text: text })
    });

    const blob = await response.blob();
    const audioURL = URL.createObjectURL(blob);
    const audioElement = document.getElementById('audio-player');
    audioElement.src = audioURL;
    audioElement.play();
    }

    document.getElementById('convert-button').addEventListener('click', () => {
        const text = document.getElementById('text-input').value;
        convertTextToSpeech(text);
    });
