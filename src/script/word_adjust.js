export default function wordAdjust(selector) {
    const textElement = document.querySelector(selector);
    const parentElement = textElement.parentElement;

    let fontSize = 100;
    textElement.style.fontSize = `${fontSize}px`;

    const adjustFontSize = () => {
        let fontSize = 100;
        textElement.style.fontSize = `${fontSize}px`;

        while (textElement.scrollWidth > parentElement.clientWidth || textElement.scrollHeight > parentElement.clientHeight) {
            fontSize--;
            textElement.style.fontSize = `${fontSize}px`;
        }
    };

    adjustFontSize();

    window.addEventListener('resize', adjustFontSize);

    return () => {
        window.removeEventListener('resize', adjustFontSize);
    };
}