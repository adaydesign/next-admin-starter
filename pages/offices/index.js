import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListOffices from '../../components/offices/ListOffices'

const Offices = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการหน่วยงาน'} />
            <ContentBody paper={false}>
                <ListOffices />
            </ContentBody>
        </Layout>
    )
}

export default Offices