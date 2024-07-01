import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGING_FACE_KEY)

const textToClassify = "You a pretty darn cool."

const response = await hf.textClassification({
    model: "SamLowe/roberta-base-go_emotions",
    inputs: textToClassify
})

console.log(response[0].label)
console.log(response)

