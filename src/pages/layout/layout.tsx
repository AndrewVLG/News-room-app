import { FunctionComponent } from 'react';
import { Outlet } from "react-router";
import Header from "../../widgets/header/header";


const Layout:FunctionComponent = () => {

    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Layout;