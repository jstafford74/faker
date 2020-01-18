import React from "react";
// var users = require("./faker1");

const UserTableRow = ({ user }) => {
    let favColorStyle = {
        backgroundColor: user.color
    }
    return (
        <tr>
            <td className="pa3 bb b--black-10">
                <div className="flex items-center">
                    <img className="br-100 w2 h2 mr2" src={user.avatar} alt=""/>
                    {user.name}
                </div>
            </td>
            <td className="pa3 bb b--black-10">
                {user.email}
            </td>
            <td className="pa3 bb b--black-10">
                <div className="flex items-center">
                    <div className="w1 h1 mr2" style={favColorStyle}></div>
                    {user.color}
                </div>
            </td>
        </tr>
    )
}

const UserTable = ({ users }) => {
    return (
        <table className="bg-white w-100 data-table f6" cellspacing="0">
            <thead>
                <tr>
                    <th className="tl pa3 bb b--black-10">User</th>
                    <th className="tl pa3 bb b--black-10">Email</th>
                    <th className="tl pa3 bb b--black-10">Fav Color</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(function (user) {
                        return <UserTableRow user={user}></UserTableRow>
                    })
                }
            </tbody>
        </table>
    )
}

export default UserTable;