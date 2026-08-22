import { submitLead } from '../services/webhook'

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const lead = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      await submitLead(lead)

      alert('Request submitted successfully!')

      e.currentTarget.reset()
    } catch (error) {
      console.error('Lead submission failed:', error)

      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="cta-section" id="contact">

      <div className="contact-content">

        <div className="contact-info">

          <div className="section-label">
            PROTECT YOUR HOME
          </div>

          <h2>
            Request your free
            <br />
            <span>inspection.</span>
          </h2>

          <p>
            Tell us a little about your roof and we'll help
            you understand the next step.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <small>CALL US</small>
                <strong>+1 (800) 555-0199</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <small>EMAIL</small>
                <strong>hello@roofcraft.com</strong>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <small>SERVICE AREA</small>
                <strong>Serving Your Local Area</strong>
              </div>
            </div>

          </div>

        </div>

        <form className="inspection-form" onSubmit={handleSubmit}>

          <div className="form-field">

            <label>Full name</label>

            <input
              type="text"
              name="name"
              placeholder="John Smith"
              required
            />

          </div>

          <div className="form-field">

            <label>Phone number</label>

            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              required
            />

          </div>

          <div className="form-field full-width">

            <label>
              Email address <span>(optional)</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
            />

          </div>

          <div className="form-field full-width">

            <label>What do you need?</label>

            <select
              name="service"
              defaultValue=""
              required
            >

              <option value="" disabled>
                Select a service
              </option>

              <option value="roof-replacement">
                Roof Replacement
              </option>

              <option value="roof-repair">
                Roof Repair
              </option>

              <option value="roof-inspection">
                Roof Inspection
              </option>

              <option value="storm-damage">
                Storm Damage
              </option>

            </select>

          </div>

          <div className="form-field full-width">

            <label>
              Roof details <span>(optional)</span>
            </label>

            <textarea
              name="message"
              placeholder="Tell us what's going on with your roof..."
              rows="5"
            />

          </div>

          <button
            type="submit"
            className="primary-btn form-submit"
          >
            Request a Free Inspection
            <span>→</span>
          </button>

          <p className="form-note">
            By submitting this form, you agree to be contacted
            about your request. We don't share your information.
          </p>

        </form>

      </div>

    </section>
  )
}

export default Contact