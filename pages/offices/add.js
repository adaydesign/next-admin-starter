import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddOfficesForm from '../../components/offices/AddOfficesForm'
const OfficesAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการหน่วยงาน'} />
            <ContentBody>
                <AddOfficesForm/>
            </ContentBody>
        </Layout>
    )
}

export default OfficesAdd