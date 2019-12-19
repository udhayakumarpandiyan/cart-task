import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
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
            this.filterCartItems(this.props.cartItems);
            this.setState({ shoppingList: this.props.shoppingList });
        }
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.shoppingList) {
            this.filterCartItems(this.props.cartItems);
            if (this.props.shoppingList !== nextProps.shoppingList) {
                this.setState({ shoppingList: nextProps.shoppingList });
            }
        }
        if (this.props.cartItems !== nextProps.cartItems) {
            this.filterCartItems(nextProps.cartItems);
        }

    }
    filterCartItems = (cartItems) => {
        let shoppingList = this.state.shoppingList || this.props.shoppingList;
        if (shoppingList && cartItems) {
            cartItems.forEach(item => {
                let cartItem = item;
                shoppingList.forEach(listItem => {
                    if (cartItem.id === listItem.id) {
                        listItem.isAddedToCart = true;
                    }
                })

            })

            this.setState({ shoppingList: shoppingList });
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
        if (shoppingList) {
            shoppingList.sort(this.getSortedItems(sortBy, sortOrder));
        }
        this.setState({
            shoppingList: shoppingList,
            selectedSortOption: this.state.selectedSortOption === value ? -1 : value
        });
    }
    addItemtoCart = (item) => {
        this.props.addItemToCart(item);
    }
    onApplyFilter = (range) => {
        let shoppingList = this.props.shoppingList.filter((value, index, arr) => value.price >= range[0] && value.price <= range[1])
        this.setState({ shoppingList: shoppingList });
    }

    render() {
        return (
            <div className="module_container">
                <Row className="shopping-list-container">
                    <Col span={4} className="sidebar-column">
                        <Sidebar onApplyFilter={this.onApplyFilter} />
                    </Col>
                    <Col className="list-content">
                        <Row>
                            <SortOptions options={sortOptions}
                                onApplyFilter={this.onApplyFilter}
                                selectedSortOption={this.state.selectedSortOption}
                                onSortOptionClick={this.onSortOptionClick} />
                        </Row>
                        <Row gutter={20} className="shopping-list">
                            {this.state.shoppingList && this.state.shoppingList.length > 0 ? this.state.shoppingList.map((item, index) => (
                                <Col style={{ display: 'inline-grid' }} key={item.id}
                                    xs={12} sm={12} md={6} lg={4} xl={4} xxl={5}>
                                    <Card item={item} onAddToCartClick={this.addItemtoCart} />
                                </Col>
                            )) : <div className="no-items">No results found</div>}
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
