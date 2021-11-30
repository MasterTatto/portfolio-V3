import style from './styles.module.scss'

 const Container = ({className, children}) => {
    return <div className={[style.container, className ?? ''].join(' ')}>{children}</div>
}
export default Container