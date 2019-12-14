import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal } from 'antd';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import SortOptions from '../components/SortOptions';

import { getShoppingList } from '../../../store/actions/shoppingListAction';
import { addItemToCart } from '../../../store/actions/cartAction';



import '../styles/index.scss';

const sortOptions = [{ value: 1, type: "Price -- High Low" },
{ value: 2, type: "Price -- Low High" },
{ value: 3, type: "Discount" }
]

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedSortOption: -1, shoppingList: undefined };
    }
    componentDidMount() {
        if (!this.props.shoppingList) {
            this.props.getShoppingList();
        }
        else {
            this.setState({ shoppingList: this.props.shoppingList });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.shoppingList !== nextProps.shoppingList) {
            this.setState({ shoppingList: nextProps.shoppingList });
        }

    }
    // utility to handle the sorting
    getSortedItems = (prop, order) => {
        return (a, b) => {

            if (a[prop] > b[prop]) {
                return order === "desc" ? -1 : 1;
            } else if (a[prop] < b[prop]) {
                return order === "desc" ? 1 : -1;
            }
            return 0;
        }
    }

    onSortOptionClick = (value) => {
        let shoppingList = this.state.shoppingList;
        let sortOrder = value === 2 ? "asec" : "desc";
        let sortBy = value === 3 ? "discount" : "price";
        shoppingList.sort(this.getSortedItems(sortBy, sortOrder));
        this.setState({
            shoppingList: shoppingList,
            selectedSortOption: this.state.selectedSortOption === value ? -1 : value
        });
    }
    addItemtoCart = (item) => {
        this.props.addItemToCart(item);
    }

    render() {
        return (
            <div className="module_container">
                <Row className="shopping-list-container">
                    <Col span={4} className="sidebar-column">
                        <Sidebar />
                    </Col>
                    <Col>
                        <Row>
                            <SortOptions options={sortOptions}
                                selectedSortOption={this.state.selectedSortOption}
                                onSortOptionClick={this.onSortOptionClick} />
                        </Row>
                        <Row gutter={20} className="shopping-list">
                            {this.state.shoppingList && this.state.shoppingList.map((item, index) => (
                                <Col style={{ display: 'inline-grid' }}
                                    xs={12} sm={12} md={6} lg={4} xl={4} xxl={5}>
                                    <Card item={item} onAddToCartClick={this.addItemtoCart} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingListReducer && state.shoppingListReducer.shoppingList,
        cartItems: state.cartReducer && state.cartReducer.cartItems
    }
}
export default connect(mapStateToProps, { getShoppingList, addItemToCart })(ShoppingList);
