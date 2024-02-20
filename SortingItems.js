import React, { useEffect, useState } from "react";
import ItemTable from "./ItemTable";

const SortingItems = ({article}) =>{
    const[article1,setArticle] = useState(article);
    const[count,setCount] = useState(0);
    // const [flag,setFlag] = useState(false)
    // console.log(article1,'Aman');

    const Counter =()=>{
        setCount(count+1);
    }

    const handleUpvoted =()=>{
        // setFlag(!flag);
        const test=article.sort((a,b) => {
            if(a.upvotes>b.upvotes) return 1;
            if(a.upvotes<b.upvotes) return -1;
        })
        console.log(test,'++++++++++++++++++++')
        setArticle(()=>[...test]);
    }

    console.log('shridhar',article1);

    const handleDate = () =>{
        console.log(article1)
        // setFlag(!flag);
        const test1 = article1.sort((a,b)=>{
            let d1 = new Date(a.date);
            let d2 = new Date(b.date);
            console.log(d1);
            
            if(d1<d2) return 1;
            if(d1>d2) return -1
        })
        console.log(test1)
        setArticle(()=>[...test1]);
    }

    useEffect(()=>{

    },[article1])

    return(
        <>
            <div>
                <button onClick={()=>handleUpvoted()}>Upvoted</button>
                <button onClick={handleDate}>Date</button>
                <button onClick={Counter}>counter</button>
                {count}
                <ItemTable article1={article1} />
            </div>
        </>
    )
}

export default SortingItems;