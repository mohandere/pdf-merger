const merge = require("easy-pdf-merge");

const files = [
  "pdf-files-to-merge/sample-01.pdf",
  "pdf-files-to-merge/sample-02.pdf",
];

merge(files, "out/merged.pdf", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Success!");
});
