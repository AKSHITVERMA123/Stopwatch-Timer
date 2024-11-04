
// function UserComp (){
//     return (<div>
//             <h2>This is UserComp Component</h2>
//         </div>)
// } 

const UserComp = (props) =>{
    // return (
    //     <div>
    //         <h3>{props.uname} login sucessfully</h3>
    //     </div>
    //     )

    if(props.uname==="Shobhit"){
        // return "Not a user";
        throw new Error("Not a User");
    }
     return  <h3>{props.uname} login sucessfully</h3>
    }
    // return props.uname;

export default UserComp;