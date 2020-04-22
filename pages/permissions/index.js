import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListPermissions from '../../components/permissions/ListPermissions'

const Roles = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการสิทธิ์การใช้งาน - Permissions'} />
            <ContentBody paper={false}>
                <ListPermissions />
            </ContentBody>
        </Layout>
    )
}

export default Roles