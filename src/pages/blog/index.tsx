import { useRouter } from 'next/router'
import queryString from 'query-string'
import React, { useEffect } from 'react'

const index = () => {
    const router = useRouter()
    const query = queryString.stringify(router.query)
    useEffect(() => {
        router.push(`/${!!query.length ? `?${query}` : ""}`)
    },[])
  return (
    <></>
  )
}

export default index