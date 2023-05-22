import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { actLoginAsync, actRegisterAsync } from '../store/user/actions'

function RegisterPage() {

  const [formData, setFormData] = useState(
    {
      email: '',
      username: '',
      password: '',
      nickname: ''
    })

  const dataLogin = {
    username: formData.username,
    password: formData.password
  }

  const dispatch = useDispatch()

  const history = useHistory()

  async function handleChangeValue(e) {
    await setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actRegisterAsync(formData)).then((response) => {
      if (response.ok) {
        dispatch(actLoginAsync(dataLogin)).then((response) => {
          if (response.ok) {
            history.push('/')
          } else {
            alert(response.error)
          }
        })
      } else {
        alert(response.error)
      }
    })
  }
  console.log(formData);
  console.log(setFormData);
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Email"
                  placeholder="Nhập Email ..."
                  autoComplete="off"
                  name="email"
                  onChange={handleChangeValue}
                />
                <Input
                  label="Nickname"
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickname"
                  onChange={handleChangeValue}
                />
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  onChange={handleChangeValue}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChangeValue}
                />
                <Input
                  type="password"
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChangeValue}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage