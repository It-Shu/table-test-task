import React from 'react';
import s from './Status.module.scss'
interface StatusType {
    status: string
}
const Status = ({status}: StatusType) => {

        switch (status) {
            case 'new': return <div className={s.status_new}>{status}</div>
            case 'assigned_to': return <div className={s.status_assigned_to}>{status}</div>
            case 'completed': return <div className={s.status_completed}>{status}</div>
            case 'started': return <div className={s.status_started}>{status}</div>
            case 'declined': return <div className={s.status_declined}>{status}</div>
            default:
                return <div>{status}</div>
        }
};

export default Status;
