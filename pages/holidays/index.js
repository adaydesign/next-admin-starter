import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListHolidays from '../../components/holidays/ListHolidays'

const Holidays = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการวันหยุด'} />
            <ContentBody paper={false}>
                <ListHolidays />
            </ContentBody>
        </Layout>
    )
}

export default Holidays