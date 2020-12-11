import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifProviderApp = () => {


    const [categories, setCategories] = useState(['One Punch'])


    // const handleAdd = () => {
    //     // setCategories([...categories, 'wolverine']);
    //     setCategories(cats => [...cats, 'wolverine'])
    // }
    return (
        <div>
            <h2>GifProviderApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }



            </ol>
        </div>


    )


}

