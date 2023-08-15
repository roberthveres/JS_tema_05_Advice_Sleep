const button = document.getElementById("button");
const text = document.getElementById("speech");
const number = document.getElementById("number");

function renderId(id)  {
    number.textContent = id;
}
function renderAdvice(advice)  {
    text.textContent = advice;
}

function jokeTeller(advice){
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: advice,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

async function getJoke() {
    const url = "https://api.adviceslip.com/advice"

    let id = '';
    let advice = '';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.slip.id) {
            id = `ADVICE #${data.slip.id}`
        }
        // id = data.slip.id

        if (data.slip.advice) {
            advice = `"${data.slip.advice}"`
        }
        // advice = data.slip.advice;

    
        renderId(id)
        renderAdvice(advice)
        jokeTeller(advice)
        
    }
    catch (e) {
        console.log(e)
    }
}


button.addEventListener('click', getJoke);
