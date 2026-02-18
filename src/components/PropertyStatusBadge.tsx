import { Construction, Key, Sparkles } from 'lucide-react';

interface PropertyStatusBadgeProps {
  status: string;
}

const PropertyStatusBadge = ({ status }: PropertyStatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Under Construction':
        return {
          icon: Construction,
          bgColor: 'bg-orange-500/20',
          borderColor: 'border-orange-500/30',
          textColor: 'text-orange-400',
          iconColor: 'text-orange-400',
        };
      case 'Possession Soon':
        return {
          icon: Key,
          bgColor: 'bg-blue-500/20',
          borderColor: 'border-blue-500/30',
          textColor: 'text-blue-400',
          iconColor: 'text-blue-400',
        };
      case 'Newly Launched':
        return {
          icon: Sparkles,
          bgColor: 'bg-green-500/20',
          borderColor: 'border-green-500/30',
          textColor: 'text-green-400',
          iconColor: 'text-green-400',
        };
      default:
        return null;
    }
  };

  const config = getStatusConfig(status);

  if (!config) return null;

  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 ${config.bgColor} border ${config.borderColor} rounded-full`}
    >
      <Icon className={`w-4 h-4 ${config.iconColor}`} />
      <span className={`${config.textColor} font-semibold text-sm`}>
        {status}
      </span>
    </div>
  );
};

export default PropertyStatusBadge;
