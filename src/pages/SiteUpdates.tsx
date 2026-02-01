import { useState } from 'react';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { localImages } from '../lib/images';

const SiteUpdates = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; projectName: string; index: number; total: number; projectImages: string[] } | null>(null);

  const projects = [
    {
      id: 'crane-heights',
      name: 'Crane Heights',
      location: 'Mbuya',
      status: 'Under Construction',
      description: 'A premium residential development featuring modern amenities and stunning views. This project represents the future of affordable luxury living in Mbuya.',
      images: localImages.projects.craneHeights,
    },
    {
      id: 'macaw-towers',
      name: 'Macaw Towers',
      location: 'Naalya',
      status: 'Coming Soon',
      description: 'An iconic tower development set to redefine urban living in Naalya. Features state-of-the-art facilities and breathtaking architecture.',
      images: localImages.projects.macawTowers,
    },
    {
      id: 'ruby-courts',
      name: 'Ruby Courts',
      location: 'Kajjansi',
      status: 'Under Construction',
      description: 'Elegant residential courts offering spacious living areas and modern design. Perfect for families seeking comfort and style.',
      images: localImages.projects.rubyCourts,
    },
    {
      id: 'stork-elegance',
      name: 'Stork Elegance',
      location: 'Ntinda',
      status: 'Planning Phase',
      description: 'A sophisticated residential project bringing elegance and comfort to the heart of Ntinda. Features premium finishes and thoughtful design.',
      images: localImages.projects.storkElegance,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="w-10 h-10 text-[#FFD700]" />
            <h1 className="text-4xl md:text-5xl font-serif text-[#FFD700]">
              Project Showroom
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our upcoming projects and witness the future of affordable housing in Uganda
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFD700]/20 rounded-2xl overflow-hidden hover:border-[#FFD700]/50 transition-all"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                      {project.name}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="w-5 h-5 text-[#DC143C]" />
                        <span className="text-lg">{project.location}</span>
                      </div>
                      <div className="px-4 py-1 bg-[#FFD700]/20 border border-[#FFD700]/30 rounded-full">
                        <span className="text-[#FFD700] text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage({ src: image, projectName: project.name, index, total: project.images.length, projectImages: project.images })}
                      className="group relative aspect-video bg-[#0a0a0a] border border-[#FFD700]/20 rounded-lg overflow-hidden hover:border-[#FFD700]/50 transition-all cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${project.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                          View Larger
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#FFD700]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
              Interested in These Projects?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get early access and exclusive pricing for these upcoming developments. Contact us today to learn more.
            </p>
            <a
              href="https://wa.me/256783277052"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#DC143C] text-[#0a0a0a] font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all hover:scale-105"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-[#1a1a1a] border border-[#FFD700]/30 rounded-lg hover:border-[#FFD700] transition-colors"
          >
            <X className="w-6 h-6 text-[#FFD700]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImage.index > 0 ? selectedImage.index - 1 : selectedImage.total - 1;
              setSelectedImage({
                ...selectedImage,
                src: selectedImage.projectImages[newIndex],
                index: newIndex,
              });
            }}
            className="absolute left-4 z-50 p-2 bg-[#1a1a1a] border border-[#FFD700]/30 rounded-lg hover:border-[#FFD700] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#FFD700]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = selectedImage.index < selectedImage.total - 1 ? selectedImage.index + 1 : 0;
              setSelectedImage({
                ...selectedImage,
                src: selectedImage.projectImages[newIndex],
                index: newIndex,
              });
            }}
            className="absolute right-4 z-50 p-2 bg-[#1a1a1a] border border-[#FFD700]/30 rounded-lg hover:border-[#FFD700] transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#FFD700]" />
          </button>

          <div className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={`${selectedImage.projectName} - Image ${selectedImage.index + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg border-2 border-[#FFD700]/30"
            />
            <div className="text-center mt-4">
              <p className="text-[#FFD700] text-lg font-semibold">
                {selectedImage.projectName} - Image {selectedImage.index + 1} of {selectedImage.total}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteUpdates;
