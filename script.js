//your code here
 document.addEventListener('DOMContentLoaded', function () {
   const input = document.getElementById('evaluatedText');
   const wordCount = document.getElementById('wordCount');

 input.addEventListener('input', function () {
    const text = input.value.trim();
    const words = text === "" ? [] : text.split(/\s+/);
    wordCount.textContent = words.length;
  });
});
