import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainContent from '../components/Content';
import Footer from '../components/Footer';
import { getCartItems } from '../../store/actions/cartAction';
import '../styles/index.scss';
import 'antd/dist/antd.css';

class Shell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="shell">
            <Header cartItems={this.props.cartItems}/>
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
export default connect(mapStateToProps, { getCartItems })(Shell);