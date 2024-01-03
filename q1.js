const formatarContato = (contato) => {
    let {nome, email, telefone} = contato
    return `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`
}

console.log(formatarContato({nome: "Raphael Laet", email: "raphalaet05@gmail.com", telefone: 123456789}))