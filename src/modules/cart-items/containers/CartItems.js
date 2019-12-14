import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Card from '../components/Card';
import PriceDetails from '../components/PriceDetails';
import { getCartItems, removeItemFromCart } from '../../../store/actions/cartAction';

import '../styles/index.scss';

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = { cartDetails: undefined };
    }
    componentDidMount() {
        if (!this.props.cartItems) {
            this.props.getCartItems();
        }
        else {
            this.getCartValue(this.props.cartItems);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cartItems !== nextProps.cartItems) {
            this.getCartValue(nextProps.cartItems);
        }
    }

    getCartValue = (cartItems) => {
        let totalPrice = 0;
        let totalDiscount = 0;
        let totalPayable = 0;
        cartItems.forEach(cartItem => {
            let item = cartItem.item;
            let price = Number((item.price / (100 - item.discount) * 100).toFixed(0));
            totalPrice = price + totalPrice;
            let discount = item.discount > 0 ? price / item.discount : 0;
            totalDiscount = discount + totalDiscount;

        });
        totalPayable = totalPrice - totalDiscount;
        this.setState({
            cartDetails: {
                totalItems: cartItems.length,
                totalPrice: totalPrice,
                totalDiscount: totalDiscount,
                totalPayable: totalPayable
            }
        })
    }
    removeItemFromCart = (item, event) => {
        // let items = this.props.cartItems.filter((value, index, arr) => value !== item);
        // this.props.removeItemFromCart(items);
    }

    render() {
        return (
            <div className="module_container">
                <Row gutter={20} className="cart-items">
                    <Col xs={24} sm={24} md={12} lg={18} xl={18} xxl={18}>
                        <Row>
                            {this.props.cartItems && this.props.cartItems.length > 0 && this.props.cartItems.map((item, index) => (
                                <Col span={24}>
                                    <Card item={item}
                                        onRemoveItemClick={(ite, event) => this.removeItemFromCart(item, event)} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
                        <PriceDetails cartDetails={this.state.cartDetails} />
                    </Col>
                </Row>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer && state.cartReducer.cartItems
    }
}
export default connect(mapStateToProps, { getCartItems, removeItemFromCart })(CartItems);
