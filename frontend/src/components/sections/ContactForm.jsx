export default function ContactForm({ section }) {
  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        {(section.fields || []).map((field) => (
          <label key={field.name}>
            {field.label}
            {field.type === 'textarea' ? (
              <textarea name={field.name} required={field.required} />
            ) : (
              <input name={field.name} type={field.type} required={field.required} />
            )}
          </label>
        ))}
        <button type="submit">{section.submitLabel}</button>
      </form>
    </section>
  )
}
