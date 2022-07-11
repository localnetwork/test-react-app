import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
// import { HomeSlider } from './home/components/HomeSlider';
import { HomeSlider } from './home/components/HomeSlider';

export default function Home() { 
//   const [data, setData] = useState()
//   const [isLoading, setLoading] = useState()

//   const fetchBodyTest = useCallback(async() => {
    
//     const testOnly = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/api/pages/2d9706e7-9381-42e8-968a-2be7cb913a9b`)

//     setData(testOnly)
//   })
//   const fetchPartnersLogos = useCallback(async () => {
//     console.log('fetch layout')
//     const response = await axios.get(`https://staging.argyle-contenta.halcyondigitalhost.com/api/node/partners/298507e5-00c6-421f-b1a5-9fd8b34caf10/logos`)
    
//     for(let index = 0; index < response.data.data.length; index++) {
//       const paragraph = await axios.get(`https://staging.argyle-contenta.halcyondigitalhost.com/api/paragraph/${response.data.data[index].relationships.paragraph_type.data.meta.drupal_internal__target_id}/${response.data.data[index].id}`)
//       const paragraphImage = await axios.get(`https://staging.argyle-contenta.halcyondigitalhost.com/api/paragraph/${response.data.data[index].relationships.paragraph_type.data.meta.drupal_internal__target_id}/${response.data.data[index].id}/image`)
      

//       console.log(paragraph.data.data) // get the paragraph info
//       console.log(paragraph.data.data.type) // get the paragraph/repeater type, useful when doing some css.
//       console.log(paragraphImage.data.data.attributes.image_style_uri) // get the paragraph image info
//     }


//   }, [])


//   const fetchTutorials = useCallback(async () => {
//     console.log('fetch productss')
//     const response = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/custom-api/tutorials`)

//     // console.log(response)

    
//     const tempData = []

//     // Additional add data request
//     for (let index = 0; index < response.data.length; index++) {
//       const test = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/api/tutorials/${response.data[index].uuid[0].value}`)


//       const testImg = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/api/tutorials/${response.data[index].uuid[0].value}/image`);

      
//       // const img = await axios.get('https://staging.test-dion.halcyondigitalhost.com/api/images/' + test.data.data.relationships.image.data.id);

//       // console.log(img.data.data)

//       const additional = response.data[index]
//       additional.created = test.data.data.attributes.createdAt

//       if(testImg.data.data) {
//         additional.testImg = testImg.data.data.attributes.image_style_uri.thumbnail
//       }

//       tempData.push(additional)
//     }
//     setLoading(false)
//     setData(tempData)

//     // console.log(tempData)
//  }, [])

//   useEffect(() => {
//     setLoading(true)
    
//     // fetchBodyTest()
//     // fetchPartnersLogos()
//     fetchTutorials()
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   // if (!data) return <p>No profile data</p>


  return (
    <>
      <div>
        <Head>
          <title>Homepage</title>
        </Head>
        
        <HomeSlider />

      </div>
    </>
  )
}