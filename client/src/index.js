import React,{ useState} from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider} from "react-intl";
import locale_en from "./i18n/en";
import locale_se from "./i18n/se";
import locale_zh from "./i18n/zh";

const data = {
    'en':locale_en,
    'se':locale_se,
    'zh':locale_zh
}
const Root = () =>{
    const [locale,setLocale] = useState(navigator.language);

    const language = locale.split(/[-_]/)[0];
    return(
        <React.StrictMode>
            <IntlProvider locale={language} key={language} defaultLocale='en' messages={data[language]}>
                <App setLocale={setLocale}/>
            </IntlProvider>
        </React.StrictMode>
    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
