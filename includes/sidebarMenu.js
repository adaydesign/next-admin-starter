import {MoveToInbox, Mail, AccessAlarm, Brightness3TwoTone, AssignmentReturn, BatteryCharging60, Telegram} from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
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
                icon:<BatteryCharging60 />,
                link: '/page41',
                key:'51'
            },
            {
                text:'หน้าที่ 4-2',
                icon:<Telegram />,
                link: '/page42',
                key:'52'
            },
        ]
    },
    {
        text:'ภาค/สังกัด',
        icon:<HomeIcon />,
        key:'6',
        subs:[
            {
                text:'รายการภาค/สังกัด',
                icon:<HomeWorkIcon />,
                link: '/divisions',
                key:'61'
            },
            {
                text:'เพิ่มรายการภาค/สังกัด',
                icon:<AddIcon />,
                link: '/divisions/add',
                key:'62'
            },

        ]
    },    
]

