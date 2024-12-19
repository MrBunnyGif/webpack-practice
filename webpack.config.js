const path = require("path")

module.exports = {
  entry: "./src/index.js", //entrada de onde ele vai pegar pra fazer o build
  output: { // saída
    filename: "bundle.js", // nome do arquivo
    path: path.resolve(__dirname, "./dist") // caminho para onde vai ser feito o build
  },
  module: {
    rules: [
      {
        test: /\.css$/, //expressão regular para procurar arquivos css
        use: [
          'style-loader', "css-loader" //Ordem importa, da esquerda para a direita. Transforma o css em estilo mesmo, identifica os arquivos de css.
        ]
      }
    ]
  }
}