import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";


const LangDropDown = () => {
    const { t, i18n } = useTranslation('landing');

    return (
        <Suspense>
        <div className="absolute mt-32 -ml-3 flex flex-col bg-white shadow h-18 w-12 rounded-lg gap-y-2">
            <button className="hover:font-semibold"
                    onClick={ () => {i18n.changeLanguage("en");}}> EN </button>
            <button className="hover:font-semibold"
                    onClick={ () => {i18n.changeLanguage("cn");}}> CN </button>
            <button className="hover:font-semibold"
                    onClick={ () => {i18n.changeLanguage("kr");}}> KR </button>
        </div>
        </Suspense>
    );
}

export default LangDropDown;