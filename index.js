import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGING_FACE_KEY)

const text = "Wow! It works! It really works!"

const response = await hf.textToSpeech({
    model: "espnet/kan-bayashi_ljspeech_vits",
    inputs: text
})

console.log(response);

const audioElement = document.getElementById('speech');
const speechUrl = URL.createObjectURL(response);
audioElement.src = speechUrl;

