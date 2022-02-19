import { useContext, useState } from "react"


import "../CSS/Home.css"


export const Home = () => {
    const [login_set, setLogin_set] = useState("for_login1");
    const [signup_set, setSignup_set] = useState("for_signup2");
    
    const changetoLogin = () => {
       // alert("works")
        setLogin_set("for_login1");
        setSignup_set("for_signup2");
      };

      const changetoSignup = () => {
        setLogin_set("for_login2");
        setSignup_set("for_signup1");
      };

    return <div>
        <div id="screen">
            <div id="navbar_home">
               <div className="nav_content_home">
                   <div>
                       <button onClick={changetoLogin}>
                       Login
                       </button>
                   </div>
                   <div>
                   <button onClick={changetoSignup}>
                        Sign Up
                       </button>
                   </div>
               </div>
            </div>
            <div className="blank"> </div>
        <div id="homepage">
                <div className="contents">
                <div className={login_set}>
                        <div>
                            <h3>LOGIN HERE</h3>
                        </div>
                        <div className="logging_in">
                            <form id="login_form">
                                <input placeholder="Enter Email" id="login_mail"></input>

                                <input placeholder="Enter Password" id="login_password"></input>

                                <button>Submit</button>
                            </form>
                        </div>
                </div>

                <div className={signup_set}>
                        <div>
                            <h3>SIGN-UP HERE</h3>
                        </div>
                        <div className="signing_up">
                            <form id="signup_form">
                                <input placeholder="Enter Name" id="signup_name"></input>
                                <input placeholder="Enter Email" id="signup_mail"></input>
                                <input placeholder="Enter Password" id="sign_password"></input>

                                <button>Submit</button>
                            </form>
                        </div>
                </div>
               
           </div>
        </div>
        
        <div className="blank"> </div>
    </div>
    </div>
}
