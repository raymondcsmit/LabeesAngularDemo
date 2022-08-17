export const childRoutes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./../admin/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { icon: 'dashboard', text: 'Dashboard' }
    },
    {
        path: 'user',
        loadChildren: () => import('./../features/user/user.module').then(m => m.UserModule),
        data: { icon: 'dashboard', text: 'Users' }
    },
    {
        path: 'blogs',
        loadChildren: () => import('./../features/post/post.module').then(m => m.PostModule),
        data: { icon: 'dashboard', text: 'Blogs' }
    },
];
