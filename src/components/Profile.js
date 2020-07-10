import React from 'react';

class Profile extends React.Component{
    render(){
        console.log(this.props)
        return <h1>i am Profile with id:{this.props.match.params.profile}</h1>
    }
}


export default Profile;