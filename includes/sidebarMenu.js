import {MoveToInbox, Mail} from '@material-ui/icons';

export const mainMenu = [
    {
        text:'Menu 1',
        icon:<MoveToInbox />,
        link: '/dashboard'
    },
    {
        text:'Menu 2',
        icon:<Mail />,
        link: '/page1'
    },
    {
        text:'Menu 3',
        icon:<MoveToInbox />,
        link: '/dashboard'
    },
    {
        text:'Menu 4',
        icon:<Mail />,
        link: '/page1'
    },
    {
        text:'Menu 5',
        icon:<Mail />,
        link: '/page1',
        subs:[
            {
                text:'Menu 1s',
                icon:<MoveToInbox />,
                link: '/dashboard'
            },
            {
                text:'Menu 2s',
                icon:<Mail />,
                link: '/page1'
            },
            {
                text:'Menu 3s',
                icon:<MoveToInbox />,
                link: '/dashboard'
            },
            {
                text:'Menu 4s',
                icon:<Mail />,
                link: '/page1'
            }
        ]
    },
    {
        text:'Menu 6',
        icon:<Mail />,
        link: '/page1',
        subs:[
            {
                text:'Menu 1ss',
                icon:<MoveToInbox />,
                link: '/dashboard'
            },
            {
                text:'Menu 2ss',
                icon:<Mail />,
                link: '/page1'
            },
        ]
    },
]

