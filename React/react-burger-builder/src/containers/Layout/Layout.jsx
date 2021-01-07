import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SiderDrawer';
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
                    <Toolbar sideOpener={this.sideDrawerOpenedHandler} />
                    <SideDrawer
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

export default Layout;