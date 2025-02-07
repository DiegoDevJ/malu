import React, { useState, useEffect } from 'react';
import { Palette, PartyPopper as Party, Phone, Mail, Instagram, MapPin, Heart, Star, Calendar } from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://i.postimg.cc/zBQC708P/arte-de-pinturas1-3550819673870237815-s2025-1-23-16-1-404-story.jpg",
    "https://i.postimg.cc/HjDQDnJw/Whats-App-Image-2025-01-23-at-4-30-14-PM-1.jpg",
    "https://i.postimg.cc/pVg7XBzZ/Whats-App-Image-2025-01-23-at-4-30-13-PM.jpg",
    "https://i.postimg.cc/5yMwDjQw/393383151-1559482134586443-4453835259962612586-n.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image}
                alt={`Pintura facial ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-pink-500/70" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <Palette className="w-16 h-16 mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Pacifico']">Arte de Pinturas</h1>
          <p className="text-xl md:text-2xl mb-8">Transforme seu evento em uma momento mágico</p>
          <a href="#contato" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
            Contrate
          </a>
        </div>

        {/* Paint Splashes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-pink-500/30 rounded-full blur-xl paint-splash" />
          <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-purple-500/30 rounded-full blur-xl paint-splash animation-delay-2000" />
          <div className="absolute bottom-[30%] left-[20%] w-36 h-36 bg-yellow-500/30 rounded-full blur-xl paint-splash animation-delay-4000" />
          <div className="absolute bottom-[10%] right-[10%] w-28 h-28 bg-blue-500/30 rounded-full blur-xl paint-splash" />
        </div>
      </header>

      {/* Serviços */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Pintura Facial",
                desc: "Designs criativos e profissionais para todas as idades"
              },
              {
                icon: <Party className="w-8 h-8" />,
                title: "Festas Temáticas",
                desc: "Personalizamos as pinturas de acordo com o tema da sua festa"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Eventos Especiais",
                desc: "Atendemos eventos corporativos e datas comemorativas"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Galeria de Sorrisos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://i.postimg.cc/5yMwDjQw/393383151-1559482134586443-4453835259962612586-n.jpg",
              "https://i.postimg.cc/T2rjgjBQ/393452743-342469958252534-6229324179398503866-n.jpg",
              "https://i.postimg.cc/HjDQDnJw/Whats-App-Image-2025-01-23-at-4-30-14-PM-1.jpg",
              "https://i.postimg.cc/J4MNqDL8/469203293-1115815356859628-2935535624301745611-n-1.jpg",
              "https://i.postimg.cc/hPs93DDd/460960582-369834779532872-1303871862103987838-n.jpg",
              "https://i.postimg.cc/W1f0T5Jp/460899131-963103725580701-8834799056649062177-n.jpg"
            ].map((url, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity">
                <img src={url} alt={`Pintura facial ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-t from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-800">Nossa Localização</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a 
                href="https://api.whatsapp.com/send?phone=5575982144159&text=Ol%C3%A1%2C%20Gostaria%20de%20contratar%20seu%20servi%C3%A7o%20%F0%9F%A5%B3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>Chame no WhatsApp</span>
              </a>
              <div className="flex items-center space-x-4">
                <Instagram className="w-6 h-6 text-purple-600" />
                <span>@arte_de_pinturas1</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-600" />
                <span>Santo Antônio de Jesus - BA</span>
              </div>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.076818907837!2d-39.27789735!3d-12.96766115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73f09f82827969f%3A0x6d5d9a8fdc886d25!2sSanto%20Ant%C3%B4nio%20de%20Jesus%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1710425163099!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pinturas Mágicas"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-pink-400" />
            <span>Feito com amor para malu</span>
          </div>
          <p className="text-purple-200">© 2024 Arte de Pinturas. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Efeito de Tinta */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}

export default App;
