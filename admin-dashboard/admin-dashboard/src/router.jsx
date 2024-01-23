import {createBrowserRouter,Navigate} from "react-router-dom";
import Login from "./views/Auth/Login";
import NotFound from "./views/NotFound";
import AdminLayout from "./components/adminComponent/AdminLayout";
import Dashboard from "./views/AdminPanel/Dashboard";
import AuthLayout from "./components/AuthComponents/AuthLayout";
import UserForm from "./views/AdminPanel/User/UserForm";
import UserList from "./views/AdminPanel/User/UserList";
import PostForm from "./views/AdminPanel/Post/PostForm";
import PostList from "./views/AdminPanel/Post/PostList";
import CategoryList from "./views/AdminPanel/Category/CategoryList";
import CategoryForm from "./views/AdminPanel/Category/CategoryForm";
import TagForm from "./views/AdminPanel/Tag/TagForm";
import TagList from "./views/AdminPanel/Tag/TagList";
import CategoryPageSeo from "./views/AdminPanel/SeoManagement/CategoryPageSeo";
import PostPageSeo from "./views/AdminPanel/SeoManagement/PostPageSeo";
import GeneralSetting from "./views/AdminPanel/GeneralSetting/GeneralSetting";

export const router = createBrowserRouter( [
    {
        path:'/',
        element:<AdminLayout />,
        children:[
            {
                path:'/',
                element:<Navigate to="/dashboards" />
            },
            {
                path:'/dashboards',
                element:<Dashboard />
            },
            {
                path:'/users',
                element:<UserList/>

            },
            {
                path:'/users/new',
                element:< UserForm key="userCreate"/>

            },
            {
                path:'/users/:id',
                element:<UserForm key="userUpdate"/>

            },
            {
                path:'/categories',
                element:< CategoryList />

            },
            {
                path:'/category/new',
                element:<CategoryForm key="categoryCreate"/>

            },
            {
                path:'/category/:id',
                element:<CategoryForm key="categoryUpdate"/>

            },
            {
                path:'/posts',
                element:< PostList />

            },
            {
                path:'/posts/new',
                element:<PostForm key="postCreate"/>

            },
            {
                path:'/posts/:id',
                element:<PostForm key="postUpdate"/>

            },
            {
                path:'/tags',
                element:<TagList/>

            },
            {
                path:'/tags/new',
                element:<TagForm key="tagCreate"/>

            },
            {
                path:'/tags/:id',
                element:<TagForm key="tagUpdate"/>

            },
            {
                path:'/catgorypage/seo',
                element:<CategoryPageSeo/>

            },
            {
                path:'/postpage/seo',
                element:<PostPageSeo/>

            },
            {
                path:'/GeneralSetting',
                element:<GeneralSetting/>

            },

            
            
        ]
    },
    {
        path:'/',
        element:<AuthLayout />,
        children:[
            {
                path:'/login/:usertype',
                element:<Login />
            },
            
            ]
    },


    {
        path:'*',
        element:<NotFound />,

    },

]);

