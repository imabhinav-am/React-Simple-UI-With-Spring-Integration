import {Component} from "react";
import axios  from "axios";
import {Users} from "./Users.type";

// class GetUsers extends Component{
//     constructor() {
//         super();
//         this.state
//     }
// }

export class GetUsers extends Component<any, any>{
    state = {
        users : [],
        err : ""
    }

    componentDidMount() {
        axios.get(' https://jsonplaceholder.typicode.com/users')
            .then((response: { data: Users }) => {
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch((error: string) => {
                console.log(error)
                this.setState({ Error: 'Error retreiving data' })
            })
    }

    render() {
        return this.state.users.map((user: Users) => {
            return (<div key={user.id}>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
                    <h2>
                        {user.address.street}
                        <br/> {user.address.suite}
                        <br/> {user.address.city}
                        <br/> ZipCode : {user.address.zipcode}
                        <br/> Location : {user.address.geo.lat}, {user.address.geo.lng}
                    </h2>
                    <h2>{user.phone}</h2>
                    <h2>{user.website}</h2>
                    <h2>
                        {user.company.name}
                        <br/> {user.company.catchPhrase}
                        <br/> {user.company.bs}
                    </h2>
                </div>
            )}
        )
    }

    // render() {
    //     return this.state.users.map(user => {
    //         const { id, name, username, email, address, phone, website, company } = user
    //         return (
    //             <tr key={id}>
    //                 <td>{id}</td>
    //                 <td>{name}</td>
    //                 <td>{username}</td>
    //                 <td>{email}</td>
    //                 <td>{address}</td>
    //                 <td>{phone}</td>
    //                 <td>{website}</td>
    //                 {/*<td>{this.showComany(company)}</td>*/}
    //             </tr>
    //         )}
    //     )
    // }

    // render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    //     return (
    //         <div>
    //             <h1>{this.state.users.length}</h1>
    //         </div>
    //     )
    // }
}