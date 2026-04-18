const showDiagram = document.querySelector('.diagram');

if (showDiagram) {
  showDiagram.addEventListener('mouseover', () => {
    showDiagram.style.boxShadow = '0 24px 70px rgba(37, 99, 235, 0.14)';
  });

  showDiagram.addEventListener('mouseout', () => {
    showDiagram.style.boxShadow = 'none';
  });
}
