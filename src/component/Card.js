import React from 'react';
import { Link } from 'react-router-dom';

//style
import styles from '../styles/Cards.module.css'

const Card = ({data , id}) => {

    const {img , title , label } = data

    return (
        <Link to={`/card/${id}`} className={styles.card}>
            <img src={img} alt={img} />
            <span>{label}</span>
            <p>{title}</p>
        </Link>
    );
};

export default Card;