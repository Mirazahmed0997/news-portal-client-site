import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Shared/newsCart/NewsCards';

const Catagory = () => {
    const catagoryNews =useLoaderData();
    return (
        <div>
            <h4> {catagoryNews.length}</h4>
            {
                catagoryNews.map(news=><NewsCards
                key={news._id} news={news}></NewsCards>)
            }
        </div>
    );
};

export default Catagory;