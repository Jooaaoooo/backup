import'./perfil/perfil_module.css';

// 2 export default () => {
    /*export default function() {
    const usuario = {
        nome: 'Gian Souza',
        avatar: ''
    }

    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}
*/
// 1 const perfil = () => {
// 1 export default perfil;

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={style.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;