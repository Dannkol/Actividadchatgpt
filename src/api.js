const API_KEY = 'w19C22gdpjxxF9oJz9n7zuTRSmloBKrJfcQKRlNR';


export default {
    async api(msg) {
        let chat = await fetch('https://api.cohere.ai/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': 'BEARER ' + API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "command-xlarge-nightly",
                "prompt": `${msg}`,
                "max_tokens": 300,
                "temperature": 0.9,
                "k": 0,
                "p": 0.75,
                "stop_sequences": [],
                "return_likelihoods": "NONE"
            })
        })

        const response = await chat.json()
        return await response

    }
}