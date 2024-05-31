
export const Cart = ({ count, addcart, handledelete, subTotal, handleamount, TotalAmount}) => {
    return (
        <>
            <div className="shopping-cart">
                <div className='d-flex title bg-dark text-white justify-content-between align-items-center'>
                    <div className="s-title">
                        <span>Shopping Bag</span>
                    </div>

                    <div className='shopping-items justify-content-end'>
                        <span>Items : <span className='text-warning'>{count}</span></span>
                    </div>
                </div>
                {
                    count === 0 ? (
                        <div className="cart-empty">
                            <i className="fa fa-shopping-cart"></i>
                            <p>Your Cart Is empty</p>
                        </div>
                    ) : (
                        <>
                            {addcart?.map((data, index) => {
                                const { image, category, price, qty } = data;
                                return (
                                    <div key={index} className="row item">
                                        <div className="col-lg-3 col-md-3 image d-flex justify-content-center align-items-center flex-column">
                                            <div className="item-image">
                                                <img src={image} alt="" />
                                        </div>
                                        <div className="remove">
                                            <p className='mb-2 remove-item text-danger' onClick={() => { handledelete(index) }}>Remove</p>
                                        </div>
                                    </div>
                                        <div className="col-lg-3 col-md-3 description d-flex justify-content-center flex-column align-items-center">
                                            <span>{category}</span>
                                            <span className="pt-md-2 pt-lg-2">${(price).toFixed(0)}</span>
                                        </div>

                                        <div className='col-lg-3 col-md-3 quantity  d-flex justify-content-center align-items-center'>
                                            <button className="plus-btn" type="button" name="button" onClick={() => { handleamount(data, -1) }}>
                                                <i className='fa fa-minus'></i>
                                            </button>
                                            <input type="text" name="qty" value={qty} />
                                            <button className="plus-btn " type="button" name="button" onClick={() => { handleamount(data, 1) }}>
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                        <div className="total-price col-lg-3 col-md-3 d-flex justify-content-center align-items-center">${(TotalAmount(data).toFixed(0))}</div>
                                       
                                    </div>
                                )
                            })}
                           <div className='total-amount d-flex justify-content-end align-items-center'>
                                <p>Total Amount :<span className='text-danger'>${(subTotal).toFixed(0)}</span></p>
                            </div>

                        </>
                    )
                }
            </div>
        </>
    )
};