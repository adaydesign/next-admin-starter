import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddHolidaysForm from '../../components/holidays/AddHolidaysForm'
const HolidaysAdd = () => {

    return (
        <Layout>
            <ContentHeader title={'เพิ่มรายการวันหยุด'} />
            <ContentBody>
                <AddHolidaysForm/>
            </ContentBody>
        </Layout>
    )
}

export default HolidaysAdd