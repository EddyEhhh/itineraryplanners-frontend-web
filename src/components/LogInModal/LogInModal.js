import React from "react";
import SmallCircleButton from "../CircleButton/SmallCircleButton/SmallCircleButton";
import InputBox from "../InputBox";


function LogInModal (){
    return (
        <div>
            <button
                data-modal-toggle="modalID"
                data-modal-show="modalID"
            >
                Click me
            </button>

            <div id = "modalID" className="aria-hidden:true fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div>
                    <div className="header">
                        <h1> Log in </h1>
                        <SmallCircleButton dataModalHide="reset-password-modal" />
                    </div>

                    <div className="body flex">

                    </div>
                </div>
            </div>
        </div>

        );

}

export default LogInModal;