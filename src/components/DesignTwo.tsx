import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { Shield, CheckCircle, Award, Star } from 'lucide-react';

const DesignTwo: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-design2-light">
      <Header variant="design2" />
      <Hero variant="design2" />
      
      {/* Cosa Facciamo Per Te */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-design2-accent/10 text-design2-accent px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">LA NOSTRA MISSIONE</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-design2-primary">La Nostra Promessa: Acquisti Trasparenti e Sicuri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mettiamo la tua sicurezza al primo posto, guidandoti verso acquisti consapevoli e garantiti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="feature-icon-2 mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Confronto Imparziale</h3>
              <p className="text-gray-600">
                Mettiamo a confronto solo i migliori prodotti, analizzando ogni dettaglio per darti una visione completa e imparziale.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="feature-icon-2 mb-6">
                <Shield size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Prodotti Certificati e Originali</h3>
              <p className="text-gray-600">
                Acquista con fiducia. Solo prodotti originali, garantiti dai produttori ufficiali.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="feature-icon-2 mb-6">
                <Award size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">Promozioni Sempre Aggiornate</h3>
              <p className="text-gray-600">
                Cerchiamo e analizziamo le migliori offerte e promozioni attive, per farti risparmiare senza compromettere la qualità.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Come Funziona */}
      <section className="section-padding bg-gradient-to-b from-design2-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-design2-accent/10 text-design2-accent px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">PROCESSO SEMPLICE</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Semplifichiamo il Tuo Acquisto</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un processo intuitivo e veloce per aiutarti a trovare solo i migliori prodotti sul mercato.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-design2-primary/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-design2-primary text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">1</div>
                <h3 className="font-bold text-lg mb-2">Scopri</h3>
                <p className="text-gray-600 text-sm">Scopri i prodotti più apprezzati e confrontali.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-design2-primary text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">2</div>
                <h3 className="font-bold text-lg mb-2">Scegli</h3>
                <p className="text-gray-600 text-sm">Scegli il prodotto che fa per te.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-design2-primary text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">3</div>
                <h3 className="font-bold text-lg mb-2">Acquista</h3>
                <p className="text-gray-600 text-sm">Fai il tuo acquisto direttamente dal sito del produttore.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-design2-primary text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">4</div>
                <h3 className="font-bold text-lg mb-2">Ricevi</h3>
                <p className="text-gray-600 text-sm">Ricevi il prodotto comodamente a casa tua in poche ore!</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-design2-primary text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto">5</div>
                <h3 className="font-bold text-lg mb-2">Tranquillità</h3>
                <p className="text-gray-600 text-sm">Acquista con tranquillità: ricevi solo prodotti originali.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="btn-primary-2">Inizia a Confrontare</button>
          </div>
        </div>
      </section>
      
      {/* Perché Sceglierci */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16">
              <img 
                src={`${window.location.origin}/lovable-uploads/489a54b1-4853-464a-afa5-a15b7816d21a.png`}
                alt="Sezione Come Funziona" 
                className="rounded-xl shadow-lg mb-8 lg:mb-0 max-w-full"
              />
            </div>
            
            <div className="lg:w-1/2">
              <span className="bg-design2-accent/10 text-design2-accent px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">PERCHÉ NOI</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Siamo la Tua Guida per Acquisti Consapevoli</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ci dedichiamo a rendere la tua esperienza di shopping online sicura, semplice e soddisfacente.
              </p>
              
              <div className="space-y-8">
                <div className="flex bg-design2-light p-4 rounded-lg">
                  <div className="mr-4 mt-1">
                    <div className="bg-design2-primary h-10 w-10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Semplicità nelle Scelte</h3>
                    <p className="text-gray-600">
                      Semplifichiamo le tue scelte con comparazioni dettagliate e sicure.
                    </p>
                  </div>
                </div>
                
                <div className="flex bg-design2-light p-4 rounded-lg">
                  <div className="mr-4 mt-1">
                    <div className="bg-design2-primary h-10 w-10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Qualità Garantita</h3>
                    <p className="text-gray-600">
                      Non dovrai mai preoccuparti della qualità del prodotto, perché tutti sono verificati e provenienti direttamente dai produttori ufficiali.
                    </p>
                  </div>
                </div>
                
                <div className="flex bg-design2-light p-4 rounded-lg">
                  <div className="mr-4 mt-1">
                    <div className="bg-design2-primary h-10 w-10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Facilità e Sicurezza</h3>
                    <p className="text-gray-600">
                      Non dovrai perdere tempo a cercare siti affidabili: ti offriamo solo link sicuri e ufficiali, garantendo un acquisto semplice e senza preoccupazioni.
                    </p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary-2 mt-8">Scopri di Più</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonianze */}
      <section className="section-padding bg-design2-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-design2-primary/10 text-design2-accent px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">TESTIMONIANZE</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa Dicono di Noi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le opinioni sincere di chi ha già utilizzato i nostri confronti per i propri acquisti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 -right-4 bg-design2-primary text-white p-2 rounded-full">
                <Star size={24} fill="white" />
              </div>
              <div className="flex text-design2-primary mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-gray-600 mb-8 italic">
                "Ho trovato il prodotto giusto grazie a Migliori a Confronto! La comparazione è chiara e l'acquisto è stato super sicuro."
              </p>
              <div className="flex items-center mt-auto">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design2-accent/20 flex items-center justify-center">
                    <span className="font-bold text-design2-accent">LM</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Laura M.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 -right-4 bg-design2-primary text-white p-2 rounded-full">
                <Star size={24} fill="white" />
              </div>
              <div className="flex text-design2-primary mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-gray-600 mb-8 italic">
                "Sono rimasta davvero soddisfatta della mia esperienza su Migliori a Confronto! La comparazione tra i prodotti è semplice e veloce, e l'acquisto è stato completamente sicuro. Consiglio a tutti di provarlo!"
              </p>
              <div className="flex items-center mt-auto">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design2-accent/20 flex items-center justify-center">
                    <span className="font-bold text-design2-accent">SL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Sara L.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 -right-4 bg-design2-primary text-white p-2 rounded-full">
                <Star size={24} fill="white" />
              </div>
              <div className="flex text-design2-primary mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-gray-600 mb-8 italic">
                "Migliori a Confronto ha reso la mia scelta facile! Ho trovato rapidamente ciò che cercavo, e il processo d'acquisto direttamente dai siti ufficiali è stato davvero rassicurante. Ottimo servizio!"
              </p>
              <div className="flex items-center mt-auto">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-design2-accent/20 flex items-center justify-center">
                    <span className="font-bold text-design2-accent">FR</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Federica R.</h4>
                  <div className="text-sm text-gray-500">Cliente Verificata</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-secondary-2">Leggi Tutte le Testimonianze</button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-design2-primary to-design2-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronta a Trovare i Prodotti Perfetti per Te?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Inizia subito a confrontare i migliori prodotti e fai acquisti sicuri dai siti ufficiali.
          </p>
          <button className="bg-white text-design2-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Inizia a Confrontare Ora
          </button>
          <div className="text-white/70 mt-6 text-sm">
            Nessuna registrazione richiesta - Confronti 100% gratuiti
          </div>
        </div>
      </section>
      
      <Footer variant="design2" />
    </div>
  );
};

export default DesignTwo;
