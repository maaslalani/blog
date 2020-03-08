const root = document.documentElement;
const rootComputedStyle = getComputedStyle(root);
let inverted = false;

const foreground = rootComputedStyle.getPropertyValue('--foreground')
const background = rootComputedStyle.getPropertyValue('--background')

function updateTheme() {
  root.style.setProperty('--foreground', inverted ? background : foreground);
  root.style.setProperty('--background', inverted ? foreground : background);
}

function handleKeydown(event) {
  switch (event.keyCode) {
    case 68:
    case 192:
      inverted = !inverted;
      updateTheme();
      break;
  }
}

document.addEventListener('keydown', handleKeydown);
