const API_KEY = '';


export default {
    api: (msg) => {
        fetch('https://api.cohere.ai/v1/generate', {
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
            .then(response => response.json())
            .then(data => alert(data.generations[0].text))
            .catch(error => console.error(error))

    }
}