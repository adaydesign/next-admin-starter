import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListRoleGroups from '../../components/rolegroups/ListRoleGroups'

const Roles = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการกลุ่มของบทบาท - Role Groups'} />
            <ContentBody paper={false}>
                <ListRoleGroups />
            </ContentBody>
        </Layout>
    )
}

export default Roles