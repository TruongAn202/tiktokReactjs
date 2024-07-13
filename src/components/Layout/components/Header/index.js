import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); //dung bind de dat ten cc co dau gach ngang

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
