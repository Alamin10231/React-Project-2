
import Button from "../Button/Button";
import styles from "./contact.module.css";


const ContactForm = ()=> {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                
               <Button />
               
            </div>
            <div className={styles.contact_image}>
                contact-2
            </div>

        </section>
    );
}

export default ContactForm;
