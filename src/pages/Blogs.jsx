import React from 'react'
import HeroBlog from '../components/blogs/HeroBlog'
import TopArticles from '../components/blogs/TopArticles'
import EditorsPick from '../components/blogs/EditorsPick'
import FeaturedSection from '../components/blogs/FeaturedSection'


const Blogs = () => {
  return (
    <main>
      <HeroBlog/>
      <TopArticles/>
         <FeaturedSection/>
      <EditorsPick/>
      
    </main>
  )
}

export default Blogs
