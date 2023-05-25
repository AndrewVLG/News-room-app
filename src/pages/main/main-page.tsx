import { useEffect, useState, useRef } from 'react'
import { useGetHeadlinesQuery } from '../../shared/api/news-api'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'

const MainPage = () => {
  const { data, isLoading } = useGetHeadlinesQuery('us')

  return (
    <div className={s.main}>
      {isLoading ? <Loader /> : <TopHeadlines data={data} />}
    </div>
  )
}
export default MainPage
