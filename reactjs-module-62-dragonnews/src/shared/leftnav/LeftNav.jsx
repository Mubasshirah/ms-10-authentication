import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '../../pages/News/editor/Editor';

const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(err=>console.error(err))
    },[])
    return (
        <div>
           <h4>All Category</h4>
           <div className=''>
            {
                categories.map(category=><p key={category.id}  className='bg-secondary text-white  mb-3 py-2 border-rounded'>
                <Link to={`/category/${category.id}`} className='text-light ps-5 text-decoration-none'>
                {category.name}
                </Link>
                </p>)
            }
           </div>
           <div>
            <Editor></Editor>
           </div>
        </div>
    );
};

export default LeftNav;