import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddWorkdaysForm from '../../components/workdays/AddWorkdaysForm'
const WorkdaysAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการวันหยุด'} />
            <ContentBody>
                <AddWorkdaysForm/>
            </ContentBody>
        </Layout>
    )
}

export default WorkdaysAdd