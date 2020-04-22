import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListLevels from '../../components/levels/ListLevels'

const Levels = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการระดับข้าราชการ'} />
            <ContentBody paper={false}>
                <ListLevels />
            </ContentBody>
        </Layout>
    )
}

export default Levels