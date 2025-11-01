import React from 'react'
import HeroBlog from '../components/blogs/HeroBlog'
import TopArticles from '../components/blogs/TopArticles'
import EditorsPick from '../components/blogs/EditorsPick'
import FeaturedSection from '../components/blogs/FeaturedSection'
import SubscribeSection from '../components/blogs/SubscribeSection'

const Blogs = () => {
  return (
    <main>
      <HeroBlog/>
      <TopArticles/>
         <FeaturedSection/>
      <EditorsPick/>
      <SubscribeSection/>
    </main>
  )
}

export default Blogs
