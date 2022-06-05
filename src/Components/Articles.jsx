import React from 'react'
import { useEffect, useState } from "react";
import AnimatedPage from './AnimatedPage';

function Articles() {
  
    const [articles,setArticles] = useState([]);
    const [term,setTerm] = useState('health')
    const [input, setInput] = useState(''); 
    const [showArticle,setShowArticle] = useState(false)
    
    const findArticle = (e) => {
        e.preventDefault()
        setTerm(input)
        setShowArticle(true)
    }

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch(
            `https://saurav.tech/NewsAPI/top-headlines/category/${term}/in.json`
            );
            const art = await res.json()
            setArticles(art.articles)
          }
        fetchArticles()
    },[term])

  return (
    <AnimatedPage>
    <div className='flex justify-center mt-8 flex-col items-center'>
        <select value={input} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-xs" onInput={e => setInput(e.target.value)}>  
            <option value="health">health</option>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
        </select>
        <button onClick={findArticle} type="submit" className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
      </div>
    <div className='overflow-hidden flex justify-center items-center'>
    <div className='p-10 inline-grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-24'>
     {articles.slice(0,6).map((article,index) => {
       const {urlToImage,title,description} = article
       return(
          <article className="p-10" key={index}>  
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={urlToImage} alt="articles"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{term}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">news</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">top-news</span>
              </div>
            </div>
          </article>
        )
     })}
    </div>
    </div>
    </AnimatedPage>
  )
}

export default Articles