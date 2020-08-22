import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './home.module.scss';
import Button from "react-bootstrap/Button";
import CategoryList from "components/category";
import Category from "../../models/category";
import {useDispatch, useSelector} from "react-redux";
import {incrementAction, setCountAction} from "store/actions/counter";
import { AppState } from 'store/store';

const dsCategory : Category[] = [
    {
        id: "1",
        name: "vietnam",
        created_at: new Date(),
        posts: 4,
    },
    {
        id: "2",
        name: "My",
        created_at: new Date(),
        posts: 2,
    }
]

function Index() {
    // Tạo state categories và hàm set giá trị cho categories
    // khi state thay đổi, component sẽ được render lại.
    const [categories, setCategories] = useState<Category[]>();

    // Khi component load xong -> nạp dữ liệu
    useEffect(() => {
        setTimeout(function () {
            setCategories(dsCategory);
        }, 3000)

        // Khi component exit
        return function () {
            dispatch(setCountAction(0));
        }
    }, [])

    // hàm handler xử lý khi bấm nạp dữ liệu
    function handleLoadData() {
        setCategories([])
        setTimeout(function () {
            setCategories(dsCategory);
        }, 3000)
    }


    // dispatch hàm để raise action
    const dispatch = useDispatch();

    // hook selector để lấy giá trị state muốn sử dụng từ store.
    const count = useSelector<AppState, number>(state => state.counter.count);


    // handler tăng biến count
    function handleIncrement() {
        dispatch(incrementAction());
    }

    // handler set giá trị biến count
    function handleSetCount() {
        dispatch(setCountAction(count * 2));
    }

    // handler xử lý mỗi khi click vào item của danh sách (con truyền dữ liệu cho cha )
    function handleCategorySelected(cate: any) {
        console.log("parent:", cate)
    }


    if (!categories) {
        return <h3>Loading...</h3>
    }

    return <>
        <h1 className={styles.title}>Home Page</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <Button variant={"info"} onClick={handleLoadData}>Load</Button>

        <input />
        <CategoryList categories={categories} selected={handleCategorySelected} />

        <hr/>

        <h1>{count}</h1>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleSetCount}>x2</Button>

        <Link to={"/about"}>About Page</Link>
    </>
}

export default Index;