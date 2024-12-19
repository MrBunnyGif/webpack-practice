import soma from './calc'
import Heading from './components/heading'

soma(1, 2)
soma(3, 4)

console.log("teste de webpack com arquivo de configuração modificado")

const heading = new Heading()
heading.create("hello world")