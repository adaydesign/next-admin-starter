import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListDivisions from '../../components/divisions/ListDivisions'

const Divisions = () => {
    return (
        <Layout>
            <ContentHeader title={'รายการภาค/สังกัด'} />
            <ContentBody paper={false}>
                <ListDivisions />
            </ContentBody>
        </Layout>
    )
}

export default Divisions