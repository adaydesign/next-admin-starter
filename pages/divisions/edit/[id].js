import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditDivisionsForm from '../../../components/divisions/EditDivisionsForm'
const DivisionsEdit = () => {

    const router = useRouter();

    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการภาค/สังกัด'} />
            <ContentBody>
                <EditDivisionsForm/>
            </ContentBody>
        </Layout>
    )
}

export default DivisionsEdit