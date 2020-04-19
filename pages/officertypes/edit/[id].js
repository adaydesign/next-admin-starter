import React from 'react'
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditOfficerTypesForm from '../../../components/officertypes/EditOfficerTypesForm'

const OfficerTypesEdit = () => {

    return (
        <Layout>
            <ContentHeader title={'แก้ไขประเภทบุคคลากรในหน่วยงาน'} />
            <ContentBody>
                <EditOfficerTypesForm />
            </ContentBody>
        </Layout>
    )
}


export default OfficerTypesEdit