import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
    const { request, error } = useFetch();
    const [comment, setComment] = React.useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        console.log(response);

        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea
                id="commnet"
                name="comment"
                value={comment}
                placeholder="Comente"
                onChange={({ target }) => setComment(target.value)}
            />
            <button className={styles.button}>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    );
};

export default PhotoCommentsForm;
