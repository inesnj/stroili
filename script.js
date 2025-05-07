document.addEventListener('DOMContentLoaded', function() {

    // Evidenzia il link attivo nella navigazione (opzionale, il CSS già lo fa con .active)
    // const navLinks = document.querySelectorAll('header nav a');
    // const currentUrl = window.location.href;
    // navLinks.forEach(link => {
    //     if (link.href === currentUrl) {
    //         link.classList.add('active');
    //     } else {
    //         link.classList.remove('active');
    //     }
    // });

    // Gestione del form di contatto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impedisce l'invio reale del form

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Per favore, compila tutti i campi obbligatori.');
                return;
            }

            // Simulazione invio (in un'applicazione reale, qui ci sarebbe una chiamata AJAX)
            console.log('Form inviato:', { name, email, message });
            alert(`Grazie per il tuo messaggio, ${name}! Ti contatteremo presto all'indirizzo ${email}.`);
            
            contactForm.reset(); // Resetta i campi del form
        });
    }

    // Gestione pulsanti "Aggiungi al Carrello"
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            alert(`"${productName}" è stato aggiunto al carrello! (Funzionalità carrello non implementata)`);
            // Qui potresti aggiungere logica per un vero carrello (es. localStorage, API)
        });
    });

    // Piccola animazione allo scroll per le sezioni (opzionale)
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.1, // 10% della sezione visibile
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Rimuovi se vuoi animare solo una volta
            } else {
                 // entry.target.classList.remove('visible'); // Rimuovi se vuoi che l'animazione si resetti uscendo
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Aggiungi una classe CSS per l'animazione 'visible'
    // In style.css dovrai aggiungere qualcosa come:
    // section { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }
    // section.visible { opacity: 1; transform: translateY(0); }
    // Ma per semplicità, la lascio commentata. Dovresti aggiungere nel CSS:
    /*
    section { 
        opacity: 0; 
        transform: translateY(30px); 
        transition: opacity 0.6s ease-out, transform 0.6s ease-out; 
    }
    section.visible { 
        opacity: 1; 
        transform: translateY(0); 
    }
    */
    // Per ora, l'effetto "visible" non farà nulla finché non aggiungi il CSS corrispondente.
    // Per rendere l'esempio più semplice, non includo l'animazione di default.

    console.log("Sito Gioielleria Splendore caricato!");
});