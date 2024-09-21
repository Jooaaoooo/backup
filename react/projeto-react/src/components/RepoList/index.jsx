import {useEffect, useState } from 'react';
import styles from './RepoList_module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repo, setRepo] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repo`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepo(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {estaCarregando ? (
                <h1>Carregando..</h1>
            ) : (
                <ul className={styles.list}>
                    {/*repo.map(respositorio => (*/}
                    {repo.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id/*respositorio.id*/}>
                            <div className={styles.listName}>
                                <b >Nome:</b> 
                                {name}
                            </div>
                            <div className={styles.listLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>
                            <div className={styles.listLink}>
                                <a target='_blank' href={respositorio.html_url}>Visitar no repositorio</a>
                            </div>
                        </li>
                    ))}
                    <li>Repositório</li>
                </ul>
                )}
        <div/>
    )
}

export default RepoList;
