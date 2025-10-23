import { Check } from "lucide-react";

export const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-lime-400/10 rounded-full p-2 mt-0.5 flex-shrink-0">
      <Check className="w-5 h-5 text-lime-400" />
    </div>
    <div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
  </div>
);
