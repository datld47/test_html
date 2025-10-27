Reveal.on('ready', event => {
  // Dọn toàn bộ fragment trước khi in PDF
  document.querySelectorAll('.fragment').forEach(el => {
    el.classList.remove('fragment');
  });

  // Tắt cơ chế fragment hoàn toàn
  Reveal.configure({ fragments: false });

  console.log("Fragments cleaned before print!");
});