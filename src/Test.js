import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
const Test = () => {

 const submit = () => {
    confirmAlert({
      title: 'Confirm to LogOut',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  return (
    <>
             <button onClick={submit}>Confirm dialog</button>
      
    </>
  );
};

export default Test;
