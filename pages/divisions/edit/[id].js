import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'

const DivisionEdit = () => {

    const router = useRouter();

    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการภาค/สังกัด'} />
            <ContentBody>
                <div>Body Page1 {router.query.id}</div>
            </ContentBody>
        </Layout>
    )
}

export default DivisionEdit