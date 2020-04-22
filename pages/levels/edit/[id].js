import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditLevelsForm from '../../../components/levels/EditLevelsForm'

import { getLevelById } from '../../../includes/requests/levels'

const LevelsEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

    async function getDataById(id) {
        const token = userData.token
        const levelData = await getLevelById(token,id)
        // console.log("...List Data ")
        // console.log(allLevels.data.data)
        setData(levelData.data.data)
        //console.log(levelData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขรายการระดับข้าราชการ'} />
            <ContentBody>
                {data ? (<EditLevelsForm data={data}/>) : (<>{'loading..'}</>)}
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

export default connect(mapStateToProps)(LevelsEdit);