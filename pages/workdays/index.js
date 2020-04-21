import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListWorkdays from '../../components/workdays/ListWorkdays'

const Workdays = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการวันหยุด'} />
            <ContentBody paper={false}>
                <ListWorkdays />
            </ContentBody>
        </Layout>
    )
}

export default Workdays