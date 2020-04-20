import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditHolidaysForm from '../../../components/holidays/EditHolidaysForm'

import { getHolidayById } from '../../../includes/requests/holidays'

const HolidaysEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataById(id) {
        const token = userData.token
        const holidayData = await getHolidayById(token,id)
        // console.log("...List Data ")
        // console.log(allHolidays.data.data)
        setData(holidayData.data.data)
        //console.log(holidayData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขวันหยุด'} />
            <ContentBody>
                {data ? (<EditHolidaysForm data={data}/>) : (<>{'loading..'}</>)}
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

export default connect(mapStateToProps)(HolidaysEdit);