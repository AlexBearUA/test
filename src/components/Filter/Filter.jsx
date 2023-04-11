import css from './Filter.module.css';
export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.Filter}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};
