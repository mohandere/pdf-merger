const PDFMerger = require("pdf-merger-js");

// https://www.npmjs.com/package/pdf-merger-js
var merger = new PDFMerger();

const files = [
  //   "pdf-files-to-merge/26009_DEC_2021.pdf",
  //   "pdf-files-to-merge/26009_JAN_2022.pdf",
  //   "pdf-files-to-merge/26009_FEB_2022.pdf",
  "pdf-files-to-merge/01.pdf",
  "pdf-files-to-merge/02.pdf",
  // "pdf-files-to-merge/03.pdf",
];

(async () => {
  for (const file of files) {
    await merger.add(file);
  }
  await merger.save("out/merged.pdf"); //save under given name and reset the internal document
})();
