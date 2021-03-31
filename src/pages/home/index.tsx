import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next"
import Button from '@material-ui/core/Button';
import { getTest } from '@/netWork';

const Index = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        init()
        return () => {

        };
    }, []);

    async function init() {
        let data = await getTest('123')
        console.log(data);

    }

    return (
        <div >
            这是home
            {t('下一页')}
            <Button onClick={() => {
                console.log(i18n.changeLanguage('zh'));
                localStorage.setItem('localCode', 'zh')
            }} variant="outlined" color="primary">
                Primary</Button>
        </div>

    );
};

export default Index;