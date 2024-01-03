const capitalizarTitulos = (livro) => livro.map(elem => elem[0].toUpperCase() + elem.substring(1, elem.length))

console.log(capitalizarTitulos(["livro 1", "livro 2", "livro 3"]))
