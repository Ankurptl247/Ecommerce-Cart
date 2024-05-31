import React from 'react'

export const Productdetail = ({ showproduct, handleCart }) => {
    console.log(showproduct)
    return (
        <>

<div className="pd-wrap">
    <div className="container mx-auto px-4">
        <div className="heading-section mb-8">
            <h2 className="text-2xl font-bold">Product Details</h2>
        </div>
        {showproduct?.map((p, i) => {
            return (
                <div className="row flex flex-wrap -mx-4 mb-8" key={i}>
                    <div className="col-md-6 col-lg-6 col-xl-6 w-full md:w-1/2 px-4 mb-4 md:mb-0">
                        <div className="product-detail-image">
                            <img src={p.image} alt="" className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 px-4">
                        <div className="product-dtl">
                            <div className="product-info">
                                <div className="product-name text-xl font-semibold mb-2">{p.title}</div>
                                <div className="product-price-discount mb-4">
                                    <span className="text-2xl font-bold">${p.price.toFixed(0)}</span>
                                </div>
                            </div>
                            <p className="mb-4">{p.description}</p>
                            <div className="my-4">
                                <button
                                    className="btn bg-black text-warning py-2 px-4 rounded"
                                    onClick={() => handleCart(p)}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
</div>

        </>
    )
}

export default Productdetail