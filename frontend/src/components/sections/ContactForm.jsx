import { useState } from 'react'

export default function ContactForm({ section }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact">
      <div className="contact-inner">
        <div className="contact-intro">
          {section.headline ? <h2>{section.headline}</h2> : null}
          {section.body ? <p>{section.body}</p> : null}
        </div>

        {submitted ? (
          <p className="contact-success">{section.successMessage}</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {(section.fields || []).map((field) => (
              <label key={field.name} className="contact-field">
                <span>
                  {field.label}
                  {field.required ? ' *' : ''}
                </span>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder || ''}
                    rows={5}
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder || ''}
                  />
                )}
              </label>
            ))}
            <button className="contact-submit" type="submit">
              {section.submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
