document.addEventListener("DOMContentLoaded", function () {
    const verdeRange = document.getElementById("verdeRange");
    const rojoRange = document.getElementById("rojoRange");
    const verdeBox = document.getElementById("verdeBox");
    const rojoBox = document.getElementById("rojoBox");
    const verdeHex = document.getElementById("verdeHex");
    const rojoHex = document.getElementById("rojoHex");

    function updateColor() {
        let verdeColor = `#00${parseInt(verdeRange.value).toString(16).padStart(2, "0")}00`;
        let rojoColor = `#${parseInt(rojoRange.value).toString(16).padStart(2, "0")}0000`;

        verdeBox.style.backgroundColor = verdeColor;
        verdeBox.style.borderColor = verdeColor;
        verdeHex.textContent = verdeColor;

        rojoBox.style.backgroundColor = rojoColor;
        rojoBox.style.borderColor = rojoColor;
        rojoHex.textContent = rojoColor;
    }

    verdeRange.addEventListener("input", updateColor);
    rojoRange.addEventListener("input", updateColor);

    updateColor();
});
