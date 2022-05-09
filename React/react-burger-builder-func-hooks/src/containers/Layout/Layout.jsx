import React, { useState } from 'react';
import { connect } from 'react-redux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);


    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    const sideDrawerOpenedHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

return (
            <>
                <div>
                    <Toolbar
                        isAuth={props.isAuthrnticated}
                        sideOpener={sideDrawerOpenedHandler} />
                    <SideDrawer
                        isAuth={props.isAuthrnticated}
                        closed={sideDrawerClosedHandler}
                        open={showSideDrawer} />
                </div>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </>
        );
    }

const mapPropsToState = state => {
    return {
        isAuthrnticated: state.auth.token !== null
    }
}

export default connect(mapPropsToState)(Layout);