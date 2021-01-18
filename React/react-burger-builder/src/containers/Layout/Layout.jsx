import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    sideDrawerOpenedHandler = () => {
        this.setState(prevState => { return { showSideDrawer: !prevState.showSideDrawer } })
    }

    render() {
        return (
            <>
                <div>
                    <Toolbar
                        isAuth={this.props.isAuthrnticated}
                        sideOpener={this.sideDrawerOpenedHandler} />
                    <SideDrawer
                        isAuth={this.props.isAuthrnticated}
                        closed={this.sideDrawerClosedHandler}
                        open={this.state.showSideDrawer} />
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }

}

const mapPropsToState = state => {
    return {
        isAuthrnticated: state.auth.token !== null
    }
}

export default connect(mapPropsToState)(Layout);