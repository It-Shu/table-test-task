import React from 'react';
import s from './Status.module.scss'
interface StatusType {
    status: string | undefined
}
const Status = ({status}: StatusType) => {

        switch (status) {
            case 'new': return <div className={s.status_new}>{'Новое'}</div>
            case 'assigned_to': return <div className={s.status_assigned_to}>{'Назначено'}</div>
            case 'completed': return <div className={s.status_completed}>{'Завершено'}</div>
            case 'started': return <div className={s.status_started}>{'Выполняется'}</div>
            case 'declined': return <div className={s.status_declined}>{'Отменено'}</div>
            default:
                return <div>{status}</div>
        }
};

export default Status;
