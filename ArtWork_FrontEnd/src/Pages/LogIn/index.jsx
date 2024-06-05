import PageTemplate from "../../Components/PageTemplates";
import image from "../../../src/Assets/login.png";

const LogIn = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome Back!"}
                          message={"Log in to your DashBoard"} buttonMessage={"Login"}
                          holder1={"Email:"} holder2={"Password:"}/>

        </>
    )
}
export default LogIn;