const Carrinho = () => {
    let carrinho = 0;

    return (
        <>
            <section className="container">
                <h1>Carrinho de compras: {carrinho}</h1>

                <button className="add-button">+</button>
                <button className="remove-button">-</button>
            </section>
        </>
    )
}

export default Carrinho;