import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
  const categoryNews=useLoaderData(); 
  const {id}=useParams();
    
    return (
        <div className='mt-5'>
            {id && <h4>This category has {categoryNews.length} news.</h4>}
          {categoryNews.map(singleCategoryNews=><NewsCard singleCategoryNews={singleCategoryNews} key={singleCategoryNews._id}></NewsCard>)}
        </div>
    );
};

export default Category;