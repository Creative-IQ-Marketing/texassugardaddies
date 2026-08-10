import OptimizedImage from "./ui/OptimizedImage";
import extras1 from "../assets/extras/optimized/cake.webp";
import extras2 from "../assets/extras/optimized/imgi_4_68c0e4f744a6632cc3db5706.webp";
import extras3 from "../assets/extras/optimized/imgi_6_68c0e4f6fc367038f91acf8a.webp";

const IMAGES = [
  {
    src: extras1,
    alt: "Custom wedding cake by San Antonio bakery - Texas Sugar Daddies catering services",
    className: "row-span-2",
  },
  {
    src: extras2,
    alt: "Fresh baked cupcakes and desserts from San Antonio bakery",
    className: "",
  },
  {
    src: extras3,
    alt: "Professional catering setup for San Antonio events and weddings",
    className: "",
  },
];

export default function HeroGallery() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="grid h-[30rem] grid-cols-2 grid-rows-2 gap-3">
        {IMAGES.map((image) => (
          <div
            key={image.alt}
            className={`relative min-h-0 overflow-hidden rounded-[1.25rem] ${image.className}`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              eager={false}
              priority="low"
              tone="dark"
              wrapperClassName="absolute inset-0 h-full w-full overflow-hidden rounded-[1.25rem]"
              className="h-full w-full rounded-[1.25rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
