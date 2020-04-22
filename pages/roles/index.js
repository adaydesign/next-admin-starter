import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListRoles from '../../components/roles/ListRoles'

const Roles = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการบทบาท - Role'} />
            <ContentBody paper={false}>
                <ListRoles />
            </ContentBody>
        </Layout>
    )
}

export default Roles