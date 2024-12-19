const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js", //entrada de onde ele vai pegar pra fazer o build
  output: { // saída
    filename: "bundle.js", // nome do arquivo
    path: path.resolve(__dirname, "./dist") // caminho para onde vai ser feito o build
  },
  mode: "development", // configura o build para desenvolvimento, ou seja, arquivos não minimizados e não otimizados.
  // Bom par debug
  devServer: { // configura o servidor de desenvolvimento
    static: path.resolve(__dirname, "./dist"), // caminho para onde vai ser feito o build
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/, //expressão regular para procurar arquivos css
        use: [
          MiniCssExtractPlugin.loader, "css-loader" //Ordem importa, da esquerda para a direita.
          // Builda o css para um arquivo em específico, identifica os arquivos de css.
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // configura o nome do arquivo final do build de css
      filename: "index.css"
    }),
    new HtmlPlugin({
      filename: "index.html",
    })
  ]
}