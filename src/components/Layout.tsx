import React from "react";
import Header from "./Header";
import Index from "./footer";
import Sidebar from "./Sidebar";


interface Props {
   children: React.ReactNode,
    title?: string,
}


function Layout(props: Props) {
    const { children, title } = props;
    return <>
            <Header title={title} />
                <main>
                    {children}
                </main>
                <Sidebar   />
            <Index/>
        </>
}

export default Layout;