import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddPositionsForm from '../../components/positions/AddPositionsForm'
const PositionsAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการตำแหน่ง'} />
            <ContentBody>
                <AddPositionsForm/>
            </ContentBody>
        </Layout>
    )
}

export default PositionsAdd