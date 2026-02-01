import { Heart, Droplets, Gift, Users, X } from 'lucide-react';
import { useState } from 'react';
import { localImages } from '../lib/images';

const CSR = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const initiatives = [
    {
      title: 'Blood Donation Drive',
      description:
        'Universal Affordable Housing organized a blood donation drive to support local hospitals and save lives in our community. Our team and volunteers came together to donate blood and encourage others to participate in this noble cause.',
      icon: Droplets,
      images: localImages.csr.bloodDonation,
      date: '2025',
      impact: 'Over 50 units of blood collected',
    },
    {
      title: 'Najeera Church Community Outreach',
      description:
        'We conducted a special give-away event at a church in Najeera, providing essential items, food supplies, and support to families in need. This initiative reflects our commitment to uplifting communities where we operate.',
      icon: Gift,
      images: localImages.csr.churchOutreach,
      date: '2025',
      impact: 'Supported 100+ families with essential supplies',
    },
    {
      title: 'Goma Police Station Support',
      description:
        'As part of our corporate social responsibility, we donated essential equipment and resources to Goma Police Station to enhance their capacity to serve and protect the community effectively.',
      icon: Users,
      images: localImages.csr.policeSupport,
      date: '2025',
      impact: 'Enhanced security infrastructure for the community',
    },
    {
      title: 'Ntinda Community Development',
      description:
        'Our donation to the Ntinda community focused on supporting local development initiatives, including infrastructure improvements and community programs that benefit residents and enhance quality of life.',
      icon: Heart,
      images: localImages.csr.communityDev,
      date: '2025',
      impact: 'Improved community facilities and services',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#FFD700] mb-4">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Giving back to the community is at the heart of everything we do. We
            believe in creating positive change and supporting the communities
            where we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFD700]/20 rounded-2xl overflow-hidden hover:border-[#FFD700]/50 transition-all"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#50C878] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0a0a0a]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white">
                        {initiative.title}
                      </h3>
                      <span className="text-sm text-[#FFD700]">
                        {initiative.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {initiative.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {initiative.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative group cursor-pointer overflow-hidden rounded-xl border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all"
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image}
                          alt={`${initiative.title} - Image ${imgIndex + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold transition-opacity">
                            View Full Size
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#FFD700]/20">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-[#50C878]" />
                      <span className="text-sm text-gray-300">
                        {initiative.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#50C878]/10 border border-[#FFD700]/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#FFD700] mb-4">
            Our Commitment to Communities
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            At Universal Affordable Housing, we believe that building homes is
            just the beginning. Our commitment extends beyond construction to
            creating lasting positive impacts in the communities we serve. Through
            various initiatives, we strive to improve lives, support local
            development, and foster a sense of togetherness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#FFD700] mb-2">4+</div>
              <div className="text-gray-400">Major Initiatives</div>
            </div>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#50C878] mb-2">500+</div>
              <div className="text-gray-400">Lives Impacted</div>
            </div>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
              <div className="text-4xl font-bold text-[#DC143C] mb-2">100%</div>
              <div className="text-gray-400">Community Focused</div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#0a0a0a] transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CSR;
