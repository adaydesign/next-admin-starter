import React from 'react'
import { useRouter } from 'next/router';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'

const OfficerTypesEdit = () => {

    const router = useRouter();

    return (
        <Layout>
            <ContentHeader title={'แก้ไขประเภทบุคคลากรในหน่วยงาน'} />
            <ContentBody>
                <div>Body Page1 {router.query.id}</div>
            </ContentBody>
        </Layout>
    )
}

export default OfficerTypesEdit