
import React  from 'react';

const Cart2 = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
	}) => {

	

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price );
		setCountProducts(countProducts-1);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<div  class="container bg-warning">
			<div className='count-products'>
				<span id='contador-productos'>
					<h6>productos totales:{countProducts}</h6>
				</span>
			</div>
			<div>
				{allProducts.length ? (
					<>
					<div className='row-product'>
								{allProducts.map(product => (
									<div className='card' key={product.id}>
										<div className='row m-3'>
											<p className='col-4'>
												{product.title}
											</p>
											<div className='col-1'>
												${product.price}
											</div>
											<button
												onClick={() => onDeleteProduct(product)}
												className='col-2 btn btn-ouline-primary'
											>
												delete product
											</button>
										</div>
										
										
									</div>
								))}
							</div>

						<div className='cart-total'>
							<h3>Total:</h3>
							<span className='total-pagar'>${total}</span>
						</div>

						<button className='btn-clear-all' onClick={onCleanCart}>
							Vaciar Carrito
						</button>
					</>
				) : (
					<p className='cart-empty'>El carrito está vacío</p>
				)}
			</div>
		</div>
	);
};
export default Cart2;