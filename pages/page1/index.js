import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'

const Page1 = () => {

    return (
        <Layout>
            <ContentHeader title={'Page 1'} />
            <ContentBody>
                <div>Body Page1</div>
            </ContentBody>
        </Layout>
    )
}

export default Page1