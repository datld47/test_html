// 1️⃣ Hàm tách block code step-by-step thành fragment
function splitCodeStepByStep(selector = 'code.step') {
  document.querySelectorAll(selector).forEach(codeBlock => {
    const lines = codeBlock.innerHTML.split('\n');
    codeBlock.innerHTML = '';
    let fragmentIndex = 1;
    lines.forEach(line => {
      if (line.trim() === '') {
        codeBlock.innerHTML += '<br>';
      } else {
        const span = document.createElement('span');
        span.className = 'fragment';
        span.setAttribute('data-fragment-index', fragmentIndex);
        span.innerHTML = line + '\n';
        codeBlock.appendChild(span);
        fragmentIndex++; // TĂNG INDEX SAU MỖI DÒNG CODE
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
    // Chọn tất cả code block step-by-step
    splitCodeStepByStep();
  });

