import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldCheck, Send, ArrowRight, Info } from 'lucide-react';

export default function App() {
  const [telegramUsername1, setTelegramUsername1] = useState('');
  const [telegramUsername2, setTelegramUsername2] = useState('');
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');

  const handlePurchase = (
    e: React.MouseEvent<HTMLAnchorElement>,
    username: string,
    setError: (err: string) => void,
    link: string
  ) => {
    if (!username.trim()) {
      e.preventDefault();
      setError('L\'username Telegram è obbligatorio.');
      return;
    }
    if (!username.startsWith('@')) {
      e.preventDefault();
      setError('L\'username deve iniziare con @');
      return;
    }
    setError('');
    // In a real scenario, we might pass this to Stripe via client_reference_id
    // e.g., window.location.href = `${link}?client_reference_id=${username.replace('@', '')}`;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-apple-blue selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-xl flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-apple-blue" />
            <span>EliteBetting</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-gray mb-6 leading-tight">
              Il futuro del betting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-blue-400">
                è qui.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Analisi professionali, risultati reali. Niente quote finte, solo <strong className="font-medium text-apple-gray">Valori Seri</strong>.
            </p>
          </motion.div>
        </section>

        {/* Social Proof (Stats) */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-apple-light rounded-3xl p-10 text-center flex flex-col items-center justify-center transition-transform hover:scale-[1.02] duration-300">
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Mese Scorso</span>
              <div className="text-6xl font-bold text-apple-gray tracking-tighter mb-2">
                40 <span className="text-3xl text-gray-400 font-medium">/ 52</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Vinte</span>
              </div>
            </div>

            <div className="bg-apple-light rounded-3xl p-10 text-center flex flex-col items-center justify-center transition-transform hover:scale-[1.02] duration-300">
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Mese Corrente</span>
              <div className="text-6xl font-bold text-apple-gray tracking-tighter mb-2">
                17 <span className="text-3xl text-gray-400 font-medium">/ 22</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Vinte</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Offers Section */}
        <section className="max-w-5xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Scegli il tuo piano.</h2>
            <p className="text-lg text-gray-500">Inizia a vincere con le nostre analisi esclusive.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Quota Singola</h3>
                <p className="text-gray-500 text-sm h-10">Ricevi la giocata del giorno direttamente su Telegram.</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">29€</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-blue-50 text-apple-blue px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  Quota 2.40 - 3.70
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <div className="space-y-2">
                  <label htmlFor="telegram1" className="block text-sm font-medium text-gray-700">
                    Inserisci il tuo @Username Telegram <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Send className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="telegram1"
                      value={telegramUsername1}
                      onChange={(e) => {
                        setTelegramUsername1(e.target.value);
                        setError1('');
                      }}
                      className={`block w-full pl-10 pr-3 py-3 border ${error1 ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-apple-blue focus:border-apple-blue'} rounded-xl bg-gray-50 focus:bg-white transition-colors outline-none`}
                      placeholder="@tuousername"
                    />
                  </div>
                  {error1 && <p className="text-red-500 text-sm mt-1">{error1}</p>}
                </div>

                <a
                  href="https://buy.stripe.com/aFa00keqGcZc9ldaRu3oA07"
                  onClick={(e) => handlePurchase(e, telegramUsername1, setError1, "https://buy.stripe.com/aFa00keqGcZc9ldaRu3oA07")}
                  className="w-full bg-apple-gray hover:bg-black text-white rounded-full py-4 px-6 font-medium text-lg flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  Acquista Singola
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-apple-gray text-white rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-apple-blue text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                Consigliato
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Abbonamento VIP</h3>
                <p className="text-gray-400 text-sm h-10">Accesso totale al Gruppo VIP per 7 giorni. Tutte le giocate incluse.</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">68€</span>
                  <span className="text-gray-400">/settimana</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Accesso Esclusivo
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <div className="space-y-2">
                  <label htmlFor="telegram2" className="block text-sm font-medium text-gray-300">
                    Inserisci il tuo @Username Telegram <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Send className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="telegram2"
                      value={telegramUsername2}
                      onChange={(e) => {
                        setTelegramUsername2(e.target.value);
                        setError2('');
                      }}
                      className={`block w-full pl-10 pr-3 py-3 border ${error2 ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-gray-700 focus:ring-apple-blue focus:border-apple-blue'} rounded-xl bg-white/5 focus:bg-white/10 text-white transition-colors outline-none placeholder-gray-500`}
                      placeholder="@tuousername"
                    />
                  </div>
                  {error2 && <p className="text-red-400 text-sm mt-1">{error2}</p>}
                </div>

                <a
                  href="https://buy.stripe.com/7sY3cwdmCcZcgNF4t63oA08"
                  onClick={(e) => handlePurchase(e, telegramUsername2, setError2, "https://buy.stripe.com/7sY3cwdmCcZcgNF4t63oA08")}
                  className="w-full bg-apple-blue hover:bg-apple-blue-hover text-white rounded-full py-4 px-6 font-medium text-lg flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  Diventa VIP
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Experience Explanation */}
        <section className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Info className="w-8 h-8 text-apple-blue" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Cosa succede dopo il pagamento?</h4>
              <p className="text-gray-600 leading-relaxed">
                Grazie all'username Telegram fornito in fase di acquisto, verrai contattato <strong>immediatamente</strong> dal nostro team. Riceverai la quota e tutti gli aggiornamenti in tempo reale, inclusa la notifica di stop quota quando non sarà più disponibile.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EliteBetting. Tutti i diritti riservati.</p>
          <p className="mt-2">Il gioco è vietato ai minori di 18 anni e può causare dipendenza patologica.</p>
        </div>
      </footer>
    </div>
  );
}
