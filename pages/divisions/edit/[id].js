import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditDivisionsForm from '../../../components/divisions/EditDivisionsForm'

import { getDivisionById } from '../../../includes/requests/divisions'

const DivisionsEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataById(id) {
        const token = userData.token
        const divisionData = await getDivisionById(token,id)
        // console.log("...List Data ")
        // console.log(allDivisions.data.data)
        setData(divisionData.data.data)
        //console.log(divisionData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการภาค/สังกัด'} />
            <ContentBody>
                {data ? (<EditDivisionsForm data={data}/>) : (<>{'loading..'}</>)}
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

export default connect(mapStateToProps)(DivisionsEdit);