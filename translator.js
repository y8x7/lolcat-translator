function toLolcat(text) {
    const transformations = {
        "exit": "kthxbai",
        "mods": "modz",
        "options": "opshuns",
        "graphics": "grefix",
        "settings": "setinz",
        "language": "speak",
        "what": "wat",
        "music": "musik",
        "sounds": "soundz",
        "chat": "chet",
        "packs": "packz",
        "telemetry": "telekenesis",
        "data": "deetah",
        "mode": "moed",
        "world": "wurld",
        "creative mode": "HAX MOD",
        "commands": "Hax",
        "cheats": "Hax",
        "version": "vershun",
        "unknown": "kat doesnt knoe",
        "know": "knoe",
        "make": "maek",
        "game": "gaem",
        "no": "naw",
        "yes": "yiss",
        "normal": "nermal",
        "type": "typ",
        "your": "ur",
        "more": "moar",
        "chest": "kat box",
        "bonus": "bonuz",
        "three": "THRE",
        "four": "4our",
        "edit": "chaenj"
    };

    let words = text.toLowerCase().split(/\b/);

    let lolcatText = words.map(word => transformations[word] || word).join('');

    return lolcatText;
}

function updateTranslation() {
    let inputText = document.getElementById('input').value;

    let translatedText = toLolcat(inputText);

    document.getElementById('output').value = translatedText;
}

document.getElementById('input').addEventListener('input', updateTranslation);
