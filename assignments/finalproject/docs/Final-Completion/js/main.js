
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});

// Dropzone file-upload
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');

;['dragenter','dragover'].forEach(evt =>
  dropzone.addEventListener(evt, e => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  })
);

;['dragleave','drop'].forEach(evt =>
  dropzone.addEventListener(evt, e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
  })
);

dropzone.addEventListener('drop', e => {
  if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
});

dropzone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => handleFiles(fileInput.files));

function handleFiles(fileList) {
  // Turn FileList into array
  const files = Array.from(fileList);
  files.forEach(file => {
    console.log('User selected:', file);
    // TODO: upload to server or preview
  });
}
