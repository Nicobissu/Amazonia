import Image from 'next/image';

interface Props {
  images: string[];
  alt: string;
}

export default function Gallery({ images, alt }: Props) {
  if (!images?.length) return null;

  const [first, ...rest] = images;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative h-64 rounded-xl overflow-hidden md:col-span-2">
        <Image src={first} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
      </div>
      <div className="grid h-64 grid-rows-2 gap-3">
        {(rest.length ? rest : [first]).slice(0, 2).map((img, idx) => (
          <div key={img + idx} className="relative rounded-xl overflow-hidden">
            <Image src={img} alt={`${alt} ${idx + 2}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
