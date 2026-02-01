import { properties as staticProperties } from '../lib/properties';
import HeroSlider from '../components/home/HeroSlider';
import RentToOwn from '../components/home/RentToOwn';
import VisionMission from '../components/home/VisionMission';
import WhyAffordable from '../components/home/WhyAffordable';
import FeaturedProperties from '../components/home/FeaturedProperties';

const Home = () => {
  const properties = staticProperties;
  const featuredProperties = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <HeroSlider properties={featuredProperties.slice(0, 6)} />
      <RentToOwn />
      <VisionMission />
      <WhyAffordable />
      <FeaturedProperties properties={properties.slice(0, 12)} />
    </div>
  );
};

export default Home;
