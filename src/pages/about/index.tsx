import React from 'react';
import {Link} from "react-router-dom";
import styles from './about.module.scss';

function Index() {
    return <>
        <h1 className={styles.title}>About Page</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <Link to={"/"}>Home Page</Link>
    </>
}

export default Index;