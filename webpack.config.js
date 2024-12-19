const path = require("path")

module.exports = {
  entry: "./src/index.js", //entrada de onde ele vai pegar pra fazer o build
  output: { // saida
    filename: "bundle.js", // nome do arquivo
    path: path.resolve(__dirname, "./dist") // caminho para onde vai ser feito o build

  }
}