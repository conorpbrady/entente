import react, { useState, useCallback, FormEvent } from 'react'
import submitLogin from '../api/loginApi';
import './LoginModal.css'


export default function LoginModal({ visible, closeLoginModal }: { visible: boolean, closeLoginModal: () => void }): React.JSX.Element {

  const initInputs = {username: '', password: ''}
  const [ message, setMessage ] = useState('')
  const [ inputs, setInputs ] = useState(initInputs)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = submitLogin(inputs);
    setMessage(message);
    setInputs(initInputs);
  };

  const updateUsername = (username: string)  => {
    setInputs((prevState) => ({...prevState, username: username}))
  }
  const updatePassword = (password: string) => {
    setInputs((prevState) => ({...prevState, password: password}))
  }
  return (
    <div className={`modal ${visible ? "display-block": "display-none"}`}>
    <div className={"modal-main"}>
    <div className="warning">{message}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={inputs.username}
            onChange={(e) => updateUsername(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            name="password"
            type="password"
            value={inputs.password}
            onChange={(e) => updatePassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <div><p onClick={closeLoginModal}>Close Window</p></div>
      </div>
    </div>

  )

}
