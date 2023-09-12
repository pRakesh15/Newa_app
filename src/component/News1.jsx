import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar';

import Spinner from './Spinner';
import Newsitem from './Newsitem';
import InfiniteScroll from 'react-infinite-scroll-component';

// const apikey=process.env.NEWS_APP_API
const apiKey="7d583be278ba421fa8a682a5c54e622d"

export default function News1(props) {

  
    const[article,setArticle]=useState([]);
    const[loding,setLoding]=useState(true);
    const[page,setPage]=useState(1);
    const[totalres,setTotalres]=useState(0);
  
    const[myStyle,setMyStyle]=useState(
      {
        color:"black",
        backgroundColor: "white"

      }
    );
    const[buttion,setButtion]=useState("Enable Darkmode")
    
    //hendler  for create darkmode ande lightmode
    const modeHendler=()=>
    {
      if(myStyle.color=="black")
      {
        setMyStyle({
          color:"white",
          backgroundColor: "black"
        })
        setButtion("Enable Lightmode")

      }
      else
      {
        setMyStyle( {
          color:"black",
          backgroundColor: "white"
  
        })
        
        setButtion("Enable Darkmode")
       
      }
    }

    const updateNews=async()=>
    {
      props.setproges(10);
      let Url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
     
      setLoding(true);
      let data=await axios(Url);
      setArticle(data.data.articles)
      props.setproges(30);
      setTotalres(data.data.totalResults)
      props.setproges(60);
      setLoding(false);
      document.title=`${props.category}-news app`
      props.setproges(100);
    }
    useEffect(()=>
    {
      updateNews()
    },[]);


//   const  hendelPreviousclick=async()=>
//   {
//     setPage(page-1);
//   updateNews()

//   }
//  const hendelNextclick=async()=>
//   {
//     setPage(page+1);
//     updateNews()
  
//   }


//FOR infinete scrool
const nextPage=async()=>
{

let Url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1)
      setLoding(true);
      let data=await axios(Url);
      setArticle(article.concat(data.data.articles))
      setTotalres(data.data.totalResults)
     
      setLoding(false);
      document.title=`${props.category}-news app`
    
}



  return (
    <>
    <div style={myStyle}>
    <div className="container" >
    <button className="btn btn-primary my-3" onClick={modeHendler}>{buttion}</button>
   {loding && <Spinner/>} 
  
      <div className="row">
        { article.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
            
              <Newsitem 
              style={myStyle}
                titel={element.titel}
                description={element.description}
                imgurl={element.urlToImage}
                newsurl={element.url}
                auther={element.author}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <InfiniteScroll
      dataLength={article.length}
      next={nextPage}
      hasMore={article.length!=totalres}
      loader={<Spinner/>}
    ></InfiniteScroll>
     { /* <div className="d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-primary my-3" onClick={hendelPreviousclick}>&larr; Previous</button>
      <button disabled={page>=Math.ceil(totalres/(props.pageSize))} type="button" className="btn btn-primary my-3" onClick={hendelNextclick}>Next &rarr;</button>
      </div> */}
    </div>
    </div>
    </>
  )
}
