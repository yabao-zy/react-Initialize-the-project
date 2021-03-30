import React from 'react';
import {  useTranslation} from "react-i18next"
import Button from '@material-ui/core/Button';

const Index = () => {
    const { t,i18n } = useTranslation();
    return (
        <div >
            这是home
            {t('下一页')}
            <Button onClick={() => {
                console.log(i18n.changeLanguage('zh'));
                localStorage.setItem('localCode','zh')
            }} variant="outlined" color="primary">
                Primary</Button>
        </div>

    );
};

export default Index;