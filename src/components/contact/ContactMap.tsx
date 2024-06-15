import ContactForm from "../forms/ContactForm"

const ContactMap = () => {
   return (
      <>
         <div className="g-map-inner">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.002379546153!2d-43.9360363!3d-19.9386801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69789f2f7fd1b%3A0x79a6be6ffb908107!2sR.%20Alagoas%2C%201326%20-%20Savassi%2C%20Belo%20Horizonte%20-%20MG%2C%2030140-150%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1623698454890!5m2!1sen!2sbr"></iframe>
         </div>
         <div className="g-map-contact">
            <div className="row justify-content-end">
               <div className="col-lg-5 col-md-7">
                  <ContactForm />
               </div>
            </div>
         </div>
      </>
   )
}

export default ContactMap
