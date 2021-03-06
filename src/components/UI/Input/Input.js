import React from 'react'

import styles from './Input.module.css'

const input = (props) => {
    let inputElement = null

    switch (props.elementType) {
        case ('input'):
            inputElement = 
                <input 
                    className={styles.inputElement} 
                    {...props.elementConfig}
                    value={props.value}/>
            break;
        case ('textarea'):
            inputElement = 
                <textarea 
                    className={styles.inputElement} 
                    {...props.elementConfig}
                    value={props.value}/>
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={styles.inputElement}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = 
                <input 
                    className={styles.inputElement}
                    {...props.elementConfig}
                    value={props.value}/>
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input