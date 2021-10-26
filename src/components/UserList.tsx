import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUsersListAsync } from "../store/slices/user";


export const UserList = () => {

    const dispatch = useAppDispatch();
    const users: any[] = useAppSelector(x => x.users.list);

    useEffect(() => {
        dispatch(getUsersListAsync());
    }, [dispatch])


    return (
        <div className="container">
            <div className="row">
                {
                    users.map(user => (
                        <div key={user.id} className="col-md-3">
                            <div className="card">
                                <img src={user.avatar} alt={user.first_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
