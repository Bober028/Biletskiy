import { Link } from 'react-router-dom';
import useLocalStorage from '../effect/useLocalStorage';
import axios from 'axios';


const Main = () => {
  const [token, setToken] = useLocalStorage('token', '');

  const handleLogout = () => {
    setToken(''); // Видаляємо токен
    alert('Ви вийшли з облікового запису.');
  };
  
  // function getDogs(){
  //   const response = await axios.get('https://dogs.kobernyk.com/login'), {
  //     headers: {
  //       'Authorization': 
  //     }
  //   }
  // }
  return (
    <>
      {token ? (
        <>
          <p>Ви вже авторизовані!</p>
          <button onClick={handleLogout}>Вийти</button>
        </>
      ) : (
        <>
          <Link to="/login">Увійти</Link>
          <br />
        </>
      )}
    </>
  );
};

export default Main;
