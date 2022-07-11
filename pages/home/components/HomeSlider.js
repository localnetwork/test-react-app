import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';

export const HomeSlider = () => {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState()
    // const response = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/custom-api/tutorials`)


    const fetchBodyTest = useCallback(async() => {
    
    const testOnly = await axios.get(`https://staging.test-dion.halcyondigitalhost.com/api/pages/2d9706e7-9381-42e8-968a-2be7cb913a9b`)

        setData(testOnly)
    })
    
    return (
        <div>HomeSlider</div>
    )
}

