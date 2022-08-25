
import User from "./User";

const UserContainer = () => {
    const user = [
        {
            nombre:'Armando Maldonado',
            rol:'Cliente',
            direccion: 'Final 147',
            edad:'18'
        },
        {
            nombre:'Ian Colin',
            rol:'Cliente',
            direccion: 'original 147',
            edad:'33'
        }
    ]
    return (
        <div>
            <User usuario={ user[0] }/>
            <User usuario={ user[1] }/>

        </div>
    )

}

export default UserContainer