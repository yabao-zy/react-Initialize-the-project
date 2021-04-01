import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next"
import Button from '@material-ui/core/Button';
import { getTest } from '@/netWork';
import { setKey, getKey } from '@/utlis/localStorage';

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
            <span style={{ fontSize: '18px' }}>  这是home</span>

            {t('下一页')}
            <Button onClick={() => {
                console.log(i18n.changeLanguage('zh'));
                localStorage.setItem('localCode', 'zh')
            }} variant="outlined" color="primary">
                Primary</Button>
            <Button onClick={() => {
                setKey('huancun', [1,2,3])
            }} variant="outlined" color="primary"  >
                设置缓存
         </Button>
            <Button variant="outlined" color="primary" onClick={async () => {
                let data = await getKey('huancun')
                console.log(data);
                
            }} >
                读取缓存
         </Button>
        </div>

    );
};

export default Index;