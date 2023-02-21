import React from 'react';

const SocialMediaControl = props => {
    const { 
        countValue,
        useSocilaMedia,
        updateState
    } = props;

    return (
        <div style={styles.wrapper}>
            <span> Social Media Count :{countValue}</span>
            <label>
                Include in algorithm
                <input 
                type="checkbox"
                checked={useSocilaMedia}
                onChange={evt=> updateState({type: 'SET_USE_SOCIAL_MEDIA'})}
                />
            </label>
        </div>
    )
}

const styles = {
    wrapper:{
        display:'flex',
        flexDirection:'column',
        padding: '10px',
        border: '1px solid grey'
    }
}

export default SocialMediaControl;