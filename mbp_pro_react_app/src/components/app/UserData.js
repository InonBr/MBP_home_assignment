import '../styles/page_2.css';

const UserData = (props) => {
  return (
    <div className='text-align'>
      <h4>First name: {props.userDataObj.firstName}</h4>
      <h4>Last name: {props.userDataObj.lastName}</h4>
      <h4>Phone number: {props.userDataObj.phoneNumber}</h4>
      <h4>email: {props.userDataObj.email}</h4>
    </div>
  );
};

export default UserData;
