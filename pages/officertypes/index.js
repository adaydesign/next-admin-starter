import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListOfficerTypes from '../../components/officertypes/ListOfficerTypes'

const OfficerTypes = () => {

    return (
        <Layout>
            <ContentHeader title={'รายการประเภทบุคคลากรในหน่วยงาน'} />
            <ContentBody>
                <div>Body Page1</div>
                <div>
                    <ListOfficerTypes />
                </div>
            </ContentBody>
        </Layout>
    )
}

export default OfficerTypes