import {MoveToInbox, Mail, AccessAlarm, Brightness3TwoTone, 
    AssignmentReturn, BatteryCharging60, Telegram, Contacts, Add, ListAlt, Home
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

]

