import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainContent from '../components/Content';
import Footer from '../components/Footer';
import RoutePath from '../../route';
import history from '../../route/history';

import '../styles/index.scss';
import 'antd/dist/antd.css';

let unlisten;
class Shell extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: history.location.pathname }
    }
    componentDidMount() {
        unlisten = history.listen((location, action) => {
            this.setState({ currentPage: location.hash });

        });

    }

    render() {
        return (<div className="shell">
            <Header cartItems={this.props.cartItems}
                showCart={this.state.currentPage.match(RoutePath.SHOPPING_LIST)} />
            <div className="main_content">
                <MainContent />
            </div>
            <Footer />
        </div >)
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer && state.cartReducer.cartItems
    }
}
export default connect(mapStateToProps, {})(Shell);