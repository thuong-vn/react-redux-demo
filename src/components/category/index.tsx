import React from "react";
import Category from "models/category";
import {Button} from "react-bootstrap";
interface Props {
    categories: Category[]
    selected: Function
}

function CategoryList({categories, selected}: Props) {
    function handleEdit(item: Category) {
        // console.log(item);
        selected(item);
    }

    if (!categories) {
        return null;
    }

    return <ul>
        {categories.map((category, index) => <>
            <li key={index}>
                {category.name}
                <Button onClick={() => handleEdit(category)}>Edit</Button>
            </li>
        </>)}
    </ul>
}

export default CategoryList;