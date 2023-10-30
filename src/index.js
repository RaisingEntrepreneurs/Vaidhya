import React from "react";
///import ReactDOM  from "react-dom"
import * as ReactDOM from 'react-dom';
//import Footer from "./Home Page/Footer";
///import Header from "./Home Page/Header";
///import  Login from "./Home Page/Login";
////import CenterContent from "./Home Page/Mainpage";
///import Patient from "./Doctor/PatientForm";
///import Doctorhome from "./Doctor/Doctorpage";
import Doctorhome from "./Doctor/Doctorhome";

function VaidhyaHome () {
    return (
        <div>
         {/*    <Header />
            <CenterContent />
            <Login />
             <Footer /> */}
             < Doctorhome />

    </div>
        
    )

}
export default VaidhyaHome
ReactDOM.render(<VaidhyaHome />,document.getElementById("root"))
