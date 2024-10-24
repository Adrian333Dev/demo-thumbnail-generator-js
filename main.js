// Function to update the selected image in the preview
function updateImage(imageSrc) {
  document.getElementById('preview-image').src = imageSrc;
}

// Function to update the text when user types
function updateText() {
  const text = document.getElementById('thumbnail-text').value;
  document.getElementById('preview-text').innerText = text || 'Your Text Here';
}

// Function to update the base text style (size)
function updateBaseStyle() {
  const baseStyle = document.getElementById('base-style-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all base style-related classes
  textElement.classList.remove(
    'text-luxe',
    'text-neon',
    'text-glass',
    'text-watercolor',
    'text-retro'
  );

  // Add the selected size class
  textElement.classList.add(baseStyle);
}

// Function to update the font family
function updateFont() {
  const fontClass = document.getElementById('font-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all font-related classes
  textElement.classList.remove(
    'font-playfair',
    'font-orbitron',
    'font-dancing',
    'font-montserrat'
  );

  // Add the selected font class
  textElement.classList.add(fontClass);
}

function updateFontSize() {
  const fontSize = document.getElementById('font-size-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all size-related classes first
  textElement.classList.remove('font-xxlarge', 'font-huge', 'font-xxsmall');

  // Add the selected size class
  textElement.classList.add(fontSize);
}

// Function to update the text color
function updateTextColor() {
  const colorClass = document.getElementById('color-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all color-related classes
  textElement.classList.remove(
    'text-white',
    'text-primary',
    'text-danger',
    'text-success',
    'text-warning',
    'text-info'
  );

  // Add the selected color class
  textElement.classList.add(colorClass);
}

// Function to update the shadow effect
function updateShadow() {
  const shadowClass = document.getElementById('shadow-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all shadow-related classes
  textElement.classList.remove(
    'shadow-none',
    'shadow-sm',
    'shadow',
    'shadow-lg'
  );

  // Add the selected shadow class
  textElement.classList.add(shadowClass);
}

function updatePosition() {
  const position = document.getElementById('position-select').value;
  const textElement = document.getElementById('preview-text');

  // Remove all position-related classes
  textElement.classList.remove(
    'text-left',
    'text-center',
    'text-right',
    'text-top',
    'text-bottom',
    'text-topleft',
    'text-topright',
    'text-bottomleft',
    'text-bottomright'
  );

  // Add the selected position class
  textElement.classList.add(position);
}
