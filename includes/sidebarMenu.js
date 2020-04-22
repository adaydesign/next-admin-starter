import {MoveToInbox, Mail, AccessAlarm, Brightness3TwoTone, 
    AssignmentReturn, BatteryCharging60, Telegram, Contacts,
    Add, ListAlt, Home, InsertEmoticon, SentimentVeryDissatisfied,
    AssignmentInd, FilterList, Apartment
    AssignmentReturn, BatteryCharging60, Telegram, Contacts, Add, ListAlt, 
    Home, InsertEmoticon, SentimentVeryDissatisfied, AssignmentInd,Assignment,PermContactCalendar
} from '@material-ui/icons';


export const mainMenu = [
    {
        text:'หน้าหลัก',
        icon:<MoveToInbox />,
        link: '/dashboard',
        key:'1'
    },
    {
        text:'หน้าที่ 1',
        icon:<Mail />,
        link: '/page1',
        key:'2'
    },
    {
        text:'หน้าที่ 2',
        icon:<AccessAlarm />,
        link: '/page2',
        key:'3'
    },
    {
        text:'หน้าที่ 3',
        icon:<Brightness3TwoTone />,
        link: '/page3',
        key:'4'
    },
    {
        text:'เมนู 4 (มีเมนูย่อย)',
        icon:<AssignmentReturn />,
        key:'5',
        subs:[
            {
                text:'หน้าที่ 4-1',
                link: '/page41',
                key:'51'
            },
            {
                text:'หน้าที่ 4-2',
                link: '/page42',
                key:'52'
            },
        ]
    },
    {
        text:'ภาค/สังกัด',
        icon:<Home />,
        key:'6',
        subs:[
            {
                text:'รายการภาค/สังกัด',
                link: '/divisions',
                key:'61'
            },
            {
                text:'เพิ่มรายการภาค/สังกัด',
                link: '/divisions/add',
                key:'62'
            },

        ]
    },  
    
    {  
        text:'ประเภทบุคคล',
        icon:<Contacts />,
        key:'7',
        subs:[
            {
                text:'รายการประเภทบุคคล',
                link: '/officertypes',
                key:'71'
            },
            {
                text:'เพิ่มประเภทบุคคล',
                link: '/officertypes/add',
                key:'72'
            },
        ]
    },
    {
        text: 'วันหยุด',
        icon: <InsertEmoticon />,
        key: '8',
        subs: [
            {
                text: 'รายการวันหยุด',
                link: '/holidays',
                key: '81'
            },
            {
                text: 'เพิ่มรายการวันหยุด',
                link: '/holidays/add',
                key: '82'
            },

        ]
    },  
    {
        text: 'วันทำการ',
        icon: <SentimentVeryDissatisfied />,
        key: '9',
        subs: [
            {
                text: 'รายการวันทำการ',
                link: '/workdays',
                key: '91'
            },
            {
                text: 'เพิ่มรายการวันทำการ',
                link: '/workdays/add',
                key: '92'
            },

        ]
    },  
    {
        text: 'หน่วยงาน',
        icon: <Apartment />,
        key: '10',
        subs: [
            {
                text: 'รายการหน่วยงาน',
                link: '/offices',
                key: '101'
            },
            {
                text: 'เพิ่มรายการหน่วยงาน',
                link: '/offices/add',
                key: '102'
            },

        ]
    },  

    {
        text: 'ตำแหน่งงาน',
        icon: <AssignmentInd />,
        key: '11',
        subs: [
            {
                text: 'รายการตำแหน่งงาน',
                link: '/positions',
                key: '111'
            },
            {
                text: 'เพิ่มรายการตำแหน่งงาน',
                link: '/positions/add',
                key: '112'
            },

        ]
    },  
    {
        text: 'ระดับข้าราชการ',
        icon: <FilterList />,
        key: '13',
        subs: [
            {
                text: 'รายการระดับข้าราชการ',
                link: '/levels',
                key: '131'
            },

        ]
    },  
    },
    {
        text:'Role',
        icon:<AssignmentInd />,
        link: '/roles',
        key:'14'
    },
    {
        text:'Role Group',
        icon:<Assignment />,
        link: '/rolegroups',
        key:'15'
    },
    {
        text:'Permissions',
        icon:<PermContactCalendar />,
        link: '/permissions',
        key:'16'
    }  

]

