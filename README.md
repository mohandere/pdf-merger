# pdf-merger

Combine pdf files using node js

# How to use

- Clone repo
- Do run `npm i`
- Copy and paste your pdf files in `pdf-files-to-merge` folder.
- Edit `index.js` and change `files` array - do put path of your files which you want to combine in order.
  ```
  const files = [
  "pdf-files-to-merge/sample-01.pdf",
  "pdf-files-to-merge/sample-02.pdf",
  ];
  ```
- Save file!
- Run below command
  ```
  node index.js
  ```
- Thats All! Do checkout `out/merged.pdf` file.
