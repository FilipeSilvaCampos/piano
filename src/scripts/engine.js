const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio();
let mappedKeys = [];

const playTune = (key) => {
    audio.src = `./src/mp3/${key}.wav`;
    audio.play();

    const activeKey = document.querySelector(`[data-key="${key}"]`);

    activeKey.classList.add("active");

    setTimeout(() => {
        activeKey.classList.remove("active");
    }, 150)
}

const handleVolume = (e) => {
    console.log(e);
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((k) => {
        k.classList.toggle("hide");
    });
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key))
    mappedKeys.push(key.dataset.key);
})

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("input", showHideKeys)

document.addEventListener("keydown", (k) => {
    if (!mappedKeys.includes(k.key)) return;

    playTune(k.key);
})