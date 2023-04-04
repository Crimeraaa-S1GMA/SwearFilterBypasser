var interruptions = "⁃‐ᐟ.;;'⁃',⁃ᐟ/;'⁃‐ᐟ/;'⁃‐ᐟ-"

function conversion() {
    let originalTextElement = document.getElementById("originalText");
    let convertedTextElement = document.getElementById("convertedText");
    let algorithmUsed = document.getElementById("algorithmUsed");

    convertedTextElement.setAttribute("value", convertTextToCherokee(originalTextElement.value, algorithmUsed.options[algorithmUsed.selectedIndex].value));
}

function convertTextToCherokee(originalText, algorithmUsed) {
    let convertedText = "";
    let interruptions = 0;
    for(let i = 0; i < originalText.length; i++) {
        if(originalText.charAt(i) == ' ') {
            convertedText += ' ';
        } else {
            convertedText += returnCherokeeCharacter(originalText.charAt(i).toUpperCase(), algorithmUsed);
            if(algorithmUsed == "classicDotted" || algorithmUsed == "cyrillicDotted" || algorithmUsed == "blocksDotted" || algorithmUsed == "originalTextDotted" || algorithmUsed == "greekDotted") {
                convertedText += returnInterruption(interruptions);
                interruptions++;
            } else if(algorithmUsed == "originalTextSimpleDotted") {
                convertedText += " - ";
            }
        }
    }

    return convertedText;
}

function returnInterruption(prevInterruptions) {
    let prevInterruptionsMod = prevInterruptions % interruptions.length;

    return interruptions.charAt(prevInterruptionsMod);
}

function returnCherokeeCharacter(char, algorithmUsed) {
    if(char == 'A') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭺ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "А";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄰";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Α";
        }
    }
    if(char == 'B') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ᏸ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "В";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄱";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "β";
        }
    }
    if(char == 'C') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮳ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "С";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄲";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "С";
        }
    }
    if(char == 'D') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭰ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꭰ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄳";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ꭰ";
        }
    }
    if(char == 'E') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭼ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Е";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄴";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ε";
        }
    }
    if(char == 'F') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ғ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ғ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄵";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ғ";
        }
    }
    if(char == 'G') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮆ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮆ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄶";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ꮆ";
        }
    }
    if(char == 'H') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮋ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Н";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄷";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Η";
        }
    }
    if(char == 'I') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭵ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ї";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄸";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ι";
        }
    }
    if(char == 'J') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮧ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ј";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄹";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ј";
        }
    }
    if(char == 'K') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮶ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "К";
        }
        if(algorithmUsed == "blocksDotted" || algorithmUsed == "greek") {
            return "🄺";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Κ";
        }
    }
    if(char == 'L') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮮ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮮ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄻";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ꮮ";
        }
    }
    if(char == 'M') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮇ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "М";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄼";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Μ";
        }
    }
    if(char == 'N') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "П";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "И";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄽";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Π";
        }
    }
    if(char == 'O') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮎ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "О";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄾";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Θ";
        }
    }
    if(char == 'P') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮲ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Р";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄿";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ρ";
        }
    }
    if(char == 'Q') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Q";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Q";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅀";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Q";
        }
    }
    if(char == 'R') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮢ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Я";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅁";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Я";
        }
    }
    if(char == 'S') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮪ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮪ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅂";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ꮪ";
        }
    }
    if(char == 'T') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭲ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Т";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅃";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Τ";
        }
    }
    if(char == 'U') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮜ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ц";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅄";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "μ";
        }
    }
    if(char == 'V') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮩ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮩ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅅";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ꮩ";
        }
    }
    if(char == 'W') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮤ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ш";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅆";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ψ";
        }
    }
    if(char == 'X') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "X";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Х";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅇";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Χ";
        }
    }
    if(char == 'Y') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮍ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "У";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅈";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Υ";
        }
    }
    if(char == 'Z') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮓ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮓ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅉";
        }
        if(algorithmUsed == "greekDotted" || algorithmUsed == "greek") {
            return "Ζ";
        }
    }

    return char;
}