import React, { Suspense } from 'react'
import Countries from '../components/Countries'

const page = () => {
   
  return (
    <div>
        <Suspense  fallback={<p>Loading...</p>}>
        <Countries/>

        </Suspense>
    </div>
  )
}

export default page