import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.walue,
      })
    );
    form.reset();
  };

  return (
    <div className={css.register}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.labeltitle}>Registration</h2>
        <div className={css.label}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={css.input}
          />
        </div>
        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
    </div>
  );
};
