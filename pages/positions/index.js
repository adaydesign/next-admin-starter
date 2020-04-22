import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListPositions from '../../components/positions/ListPositions'

const Positions = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการตำแหน่ง'} />
            <ContentBody paper={false}>
                <ListPositions />
            </ContentBody>
        </Layout>
    )
}

export default Positions