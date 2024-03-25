import React from 'react'

function BasketButton() {
    const agregarAlCarrito = async () => {
        console.log("Añadiendo a carrito")
    }

    return (
        <div>
            <button id='basketButton' onClick={agregarAlCarrito}
                variant='outline'
                colorScheme='blue'>
                Añadir a la cesta
            </button>

        </div>
    )
}

export default BasketButton;
