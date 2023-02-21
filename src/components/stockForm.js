import React from 'react';

import SelectBox  from './selectBox';
import SocialMediaControl from './socialMediaControl';

const StockForm = props => {
    const { 
        symbols, 
        timeWindows,
        currentSymbol,
        useSocialMedia,
        updateState
    } = props;

    const getAvgSocialMediaCount = () =>  currentSymbol ?
        currentSymbol.records.reduce((acc,curr) => 
            acc + curr.socialMediaCount,0)
            / (currentSymbol.records.length) :
        0;

 return (
    <div style={styles.formWrapper}>
        <SelectBox 
            items={symbols} 
            updateState={updateState}
            type={'SET_SYMBOL'}
        />
        <SelectBox 
            items={timeWindows}  
            updateState={updateState}
            type={'SET_TIME_WINDOW'}
            />
        <SocialMediaControl
           useSocialMedia={useSocialMedia}
           countValue={getAvgSocialMediaCount()} 
           updateState={updateState}
        />
    </div>
 )
}

const styles = {
    formWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
}

export default StockForm;