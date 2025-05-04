
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { Shield, CheckCircle, Award } from 'lucide-react';

const DesignOne: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header variant="design1" />
      <Hero variant="design1" />
      
      {/* Cosa Facciamo Per Te */}
      <section className="section-padding bg-white" id="la-nostra-promessa">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">La Nostra Promessa: Acquisti Trasparenti e Sicuri</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ti offriamo un'esperienza di acquisto online semplice, sicura e affidabile grazie ai nostri strumenti di comparazione.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="feature-icon-1 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Confronto Imparziale</h3>
              <p className="text-gray-600">
                Mettiamo a confronto solo i migliori prodotti, analizzando ogni dettaglio per darti una visione completa e imparziale.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="feature-icon-1 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Prodotti Certificati e Originali</h3>
              <p className="text-gray-600">
                Acquista con fiducia. Solo prodotti originali, garantiti dai produttori ufficiali.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="feature-icon-1 mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Promozioni Sempre Aggiornate</h3>
              <p className="text-gray-600">
                Cerchiamo e analizziamo le migliori offerte e promozioni attive, per farti risparmiare senza compromettere la qualità.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Come Funziona */}
      <section className="section-padding bg-design1-light" id="come-funziona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semplifichiamo il Tuo Acquisto</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un processo semplice e veloce per trovare e acquistare i prodotti perfetti per te.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-design1-primary text-white flex items-center justify-center font-bold text-lg mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Scopri</h3>
              <p className="text-gray-600 text-sm">Scopri i prodotti più apprezzati e confrontali.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-design1-primary text-white flex items-center justify-center font-bold text-lg mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Scegli</h3>
              <p className="text-gray-600 text-sm">scegli il prodotto che fa per te al giusto prezzo</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-design1-primary text-white flex items-center justify-center font-bold text-lg mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Acquista</h3>
              <p className="text-gray-600 text-sm">Fai il tuo acquisto direttamente dal sito del produttore.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-design1-primary text-white flex items-center justify-center font-bold text-lg mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">Ricevi</h3>
              <p className="text-gray-600 text-sm">Ricevi il prodotto comodamente a casa tua in poche ore!</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-design1-primary text-white flex items-center justify-center font-bold text-lg mb-4">5</div>
              <h3 className="font-bold text-lg mb-2">Rilassati</h3>
              <p className="text-gray-600 text-sm">Riceverai solo prodotti originali, garantiti dai produttori.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://rassodante-glutei.migliori-a-confronto.com/"
              target="_blank"
              rel="noopener"
              className="btn-primary-1"
            >
              Inizia a Confrontare
            </a>
          </div>
        </div>
      </section>
      
      {/* Perché Sceglierci */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Siamo la Tua Guida per Acquisti Consapevoli</h2>
              <p className="text-lg text-gray-600 mb-8">
                La tua sicurezza è la nostra priorità. Ecco perché migliaia di donne ci scelgono ogni giorno.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-design1-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Semplicità nelle Scelte</h3>
                    <p className="text-gray-600">
                      Semplifichiamo le tue scelte con comparazioni dettagliate e sicure.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-design1-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Qualità Garantita</h3>
                    <p className="text-gray-600">
                      Non dovrai mai preoccuparti della qualità del prodotto, perché tutti sono verificati e provenienti direttamente dai produttori ufficiali.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="text-design1-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Facilità e Sicurezza</h3>
                    <p className="text-gray-600">
                      Non dovrai perdere tempo a cercare siti affidabili: ti offriamo solo link sicuri e ufficiali, garantendo un acquisto semplice e senza preoccupazioni.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#la-nostra-promessa" className="btn-primary-1 inline-block">Scopri di Più</a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-design1-light rounded-lg p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Donna che confronta prodotti" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  
                  <div className="absolute -top-4 -left-4 bg-design1-primary text-white p-4 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">Acquisti sicuri</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border border-design1-light">
                    <div className="text-design1-primary font-bold text-lg">Verificato</div>
                    <div className="text-sm text-gray-600">dai nostri esperti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonianze */}
      <section className="section-padding bg-design1-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa Dicono di Noi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ascolta le esperienze delle donne che hanno già scelto Migliori a Confronto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design1-primary/20 flex items-center justify-center">
                    <span className="font-bold text-design1-primary">LM</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Laura M.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Ho trovato il prodotto giusto grazie a Migliori a Confronto! La comparazione è chiara e l'acquisto è stato super sicuro."
              </p>
              <div className="flex text-design1-primary">
                <span>★★★★★</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design1-primary/20 flex items-center justify-center">
                    <span className="font-bold text-design1-primary">SL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Sara L.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Sono rimasta davvero soddisfatta della mia esperienza su Migliori a Confronto! La comparazione tra i prodotti è semplice e veloce, e l'acquisto è stato completamente sicuro. Consiglio a tutti di provarlo!"
              </p>
              <div className="flex text-design1-primary">
                <span>★★★★★</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design1-primary/20 flex items-center justify-center">
                    <span className="font-bold text-design1-primary">FR</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Federica R.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Migliori a Confronto ha reso la mia scelta facile! Ho trovato rapidamente ciò che cercavo, e il processo d'acquisto direttamente dai siti ufficiali è stato davvero rassicurante. Ottimo servizio!"
              </p>
              <div className="flex text-design1-primary">
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-design1-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronta a Trovare i Prodotti Perfetti per Te?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Inizia subito a confrontare i migliori prodotti e fai acquisti sicuri dai siti ufficiali.
          </p>
          <button className="bg-white text-design1-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-100 transition-colors">
            Inizia a Confrontare Ora
          </button>
        </div>
      </section>
      
      <Footer variant="design1" />
    </div>
  );
};

export default DesignOne;
