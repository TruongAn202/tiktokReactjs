//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home }, //defaultLayout
    { path: '/following', component: Following }, //defaultLayout
    { path: '/profile', component: Profile }, //defaultLayout
    { path: '/upload', component: Upload, layout: HeaderOnly }, //layout
    { path: '/search', component: Search, layout: null }, //layout
]; //khong can dang nhap van xem duoc

const privateRoutes = []; // phai dang nhap moi xem duoc

export { publicRoutes, privateRoutes };
