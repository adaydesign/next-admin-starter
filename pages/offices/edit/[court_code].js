import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditOfficesForm from '../../../components/offices/EditOfficesForm'

import { getOfficeByCourtCode } from '../../../includes/requests/offices'

const OfficesEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataByCourtCode(court_code) {
        const token = userData.token
        const officeData = await getOfficeByCourtCode(token,court_code)
        // console.log("...List Data ")
        // console.log(allOffices.data.data)
        setData(officeData.data.data)
        //console.log(officeData.data.data)
    }

    useEffect(() => {
        const court_code = router.query.court_code
        getDataByCourtCode(court_code)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการหน่วยงาน'} />
            <ContentBody>
                {data ? (<EditOfficesForm data={data}/>) : (<>{'loading..'}</>)}
            </ContentBody>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(OfficesEdit);