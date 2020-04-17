import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddDivisionsForm from '../../components/divisions/AddDivisionsForm'
const DivisionsAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการภาค/สังกัด'} />
            <ContentBody>
                <AddDivisionsForm/>
            </ContentBody>
        </Layout>
    )
}

export default DivisionsAdd