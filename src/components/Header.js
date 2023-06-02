import {Toolbar} from '@material-ui/core';
import styled from "styled-components";
import React from 'react';


function Header() {
    const AppBar = styled.div`
        position: fixed;
        width: 100%;
        padding: 0 3%;
        background-color: white;
        box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1), 0 1px 2px -1px rgb(0 0 0/0.1);
    `;

    const Typography = styled.div`
        white-space: nowrap;
        letter-spacing: 0.3rem;
        font-weight: bold;
        user-select: none;
        color: black;   
    `;

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    AirHelp - 공항도우미센터
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;