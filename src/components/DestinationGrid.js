import DestinationCard from "./DestinationCard";
import { getTravelPackages } from "../services/travelService";

export default function DestinationGrid() {
  const travelPackages = getTravelPackages();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {travelPackages.map((pkg, i) => (
        <DestinationCard
          key={pkg.id}
          pkg={pkg}
          imageMode="parallax"
          className="animate-fade-up"
          style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
        />
      ))}
    </div>
  );
}
