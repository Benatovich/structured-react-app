import { useState } from 'react';
import { useForm } from '../../hooks/useForm'

import styles from './BuildForm.css';

export default function BuildForm({
  build = {},
  label = 'Build',
  onSubmit,
}) {

  const { name = '', summary = '' } = build;
  const { formState, handleChange } = useForm({ name, summary });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await onSubmit(formState);
    }
    catch(error) {
      setSaving(false);
    }
  };

  return (
    <form className={styles.buildForm} onSubmit={handleSubmit}>
      <fieldset className={styles.form}>
        <legend>{label}</legend>
        <section className={styles.formSection}>
          <label htmlFor="name">Name of build:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
        </section>

        <section className={styles.formSection}>
          <label htmlFor="name">Level:</label>
          <input
            id="level"
            name="level"
            type="number"
            value={formState.level}
            onChange={handleChange}
          />
        </section>

        <section className={styles.formSection}>
          <label htmlFor="name">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            type="text"
            value={formState.summary}
            onChange={handleChange}
            rows={3}
          />
        </section>

        {/* <section className={styles.formSection}>
          <label htmlFor="name">Weapons:</label>
          <input
            id="weapons"
            name="weapons"
            type="text"
            value={formState.weapons}
            onChange={handleChange}
          />
        </section> */}
       
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </button>
      </fieldset>
    </form>
  );
}
