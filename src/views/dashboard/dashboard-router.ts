import { IconApps, IconUser } from '@arco-design/web-vue/es/icon';

export const routerConfig = [
    {
        title: 'Home',
        icon: IconApps,
        children:[
            {title: 'Dashboard', path: '/dashboard/overview'},
            // {title: 'Picture View', path: '/dashboard/picture-view'},
        ],
        // other key information
    },
    {
        title: 'User',
        icon: IconUser,
        children:[
            {title: 'Profile', path: '/User/profile'},
        ],
        // other key information
    },
    // more routes...
];