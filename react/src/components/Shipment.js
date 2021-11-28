import React from "react";

class Shipment extends React.Component {

render() {
  const { total } = this.props;
  const shipping = total > 0 && total < 30 ? 6 : 2;
  const shippingNeon =
    shipping === 2 ? (
      <span className='font-effect-neon total_wrap-cheap'>&#36;{shipping}</span>
    ) : (
      <span>&#36;{shipping} </span>
    );

  return (
    <div className='total'>
      <div className='total_wrap'>
        <div>
          <div>Delivery: {total > 0 ? shippingNeon : null}</div>
          <div className='total_wrap-free'>
            {total < 30
              ? `order on $${30 - total} for deliviring for $2`
              : null}
          </div>
        </div>

        <div className='total_wrap-final'>Estimated total: &#36;{total} </div>
      </div>
    </div>
  );
}
}

export default Shipment;
