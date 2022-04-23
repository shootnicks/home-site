import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.discriptionBlock}>
            <div>
                <a target="_blank" href='https://home.shootnick.keenetic.name/pasha/'><img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' className='photo'></img></a>
            </div>
            <div>
                ava + discripshn
            </div>
        </div>
    )
};

export default ProfileInfo;