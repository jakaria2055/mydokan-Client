import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import LegalsContent from '../components/features/LegalsContent'
import FeatureStore from '../store/FeatureStore'

function AboutPage() {
    const {LegalDetailsListRequest} = FeatureStore();
    useEffect(()=>{
        (async ()=>{
            await LegalDetailsListRequest("about");
        })()
    },[])
  return (
    <Layout>
        <LegalsContent />
    </Layout>
  )
}

export default AboutPage