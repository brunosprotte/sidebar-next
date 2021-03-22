import styled from 'styled-components';


export const Container = styled.div`
    .navbar {
        background-color: #060b26;
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    

    .nav-menu {
        background-color: #060b26;
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        transition: 850ms;
    }

    .nav-menu.active {
        left: 0;
        transition: 350ms;
    }

    .nav-text{
        margin-left: 2rem;
        font-size: 2rem;
        background: none;

        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
    }

    .nav-text a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 18px;
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    .nav-text a:hover {
        background-color: #1a83ff;
    }

    .nav-menu-items {
        width: 100%;
    }

    .navbar-toggle {
        margin-left: 2rem;
        font-size: 2rem;
        background: none;

        background-color: #060b26;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .nav-text a span {
        margin-left: 16px;
    }
`
