import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.login}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>LOG IN</h2>
        <div className={css.label}>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className={css.button}>
          Login
        </button>
      </form>
    </div>
  );
};
