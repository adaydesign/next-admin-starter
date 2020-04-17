import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddOfficerTypesForm from '../../components/officertypes/AddOfficerTypesForm'

const OfficerTypesAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการประเภทบุคคลากรในหน่วยงาน'} />
            <ContentBody>
                <AddOfficerTypesForm />
            </ContentBody>
        </Layout>
    )
}

export default OfficerTypesAdd