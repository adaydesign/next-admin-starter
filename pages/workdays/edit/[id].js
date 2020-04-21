import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditWorkdaysForm from '../../../components/workdays/EditWorkdaysForm'

import { getWorkdayById } from '../../../includes/requests/workdays'

const WorkdaysEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataById(id) {
        const token = userData.token
        const workdayData = await getWorkdayById(token,id)
        // console.log("...List Data ")
        // console.log(allWorkdays.data.data)
        setData(workdayData.data.data)
        //console.log(workdayData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขวันทำงาน'} />
            <ContentBody>
                {data ? (<EditWorkdaysForm data={data}/>) : (<>{'loading..'}</>)}
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

export default connect(mapStateToProps)(WorkdaysEdit);