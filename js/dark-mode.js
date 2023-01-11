const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    bgBox: getStyle(html, "--bg-box"),
    colorToggle: getStyle(html, "--color-toggle"),
    colorText: getStyle(html, "--color-text"),
}

const lightMode = {
    bg: "#fff",
    bgPanel: "#434343",
    bgBox: "rgb(234, 232, 232)",
    colorToggle: "#43E7AD",
    colorText: "#000",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialColors)
})