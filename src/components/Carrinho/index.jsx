import { useState } from 'react';

const Carrinho = () => {

    let [count, setCount] = useState(0);


    const AddItem = () => {
        setCount(count + 1);
    }
    const RemoveItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <>
            <section className="container">
                <h1>Carrinho de compras: {count}</h1>

                <div className="flex">
                    <button className="add-button" onClick={AddItem}>+</button>
                    <button className="remove-button" onClick={RemoveItem}>-</button>
                </div>
            </section>
        </>
    )
}

export default Carrinho;