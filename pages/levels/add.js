import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddLevelsForm from '../../components/levels/AddLevelsForm'
const LevelsAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการระดับข้าราชการ'} />
            <ContentBody>
                <AddLevelsForm/>
            </ContentBody>
        </Layout>
    )
}

export default LevelsAdd