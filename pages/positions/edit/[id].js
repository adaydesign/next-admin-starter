import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditPositionsForm from '../../../components/positions/EditPositionsForm'

import { getPositionById } from '../../../includes/requests/positions'

const PositionsEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataById(id) {
        const token = userData.token
        const positionData = await getPositionById(token,id)
        // console.log("...List Data ")
        // console.log(allPositions.data.data)
        setData(positionData.data.data)
        //console.log(positionData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการตำแหน่ง'} />
            <ContentBody>
                {data ? (<EditPositionsForm data={data}/>) : (<>{'loading..'}</>)}
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

export default connect(mapStateToProps)(PositionsEdit);