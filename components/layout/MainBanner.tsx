import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="h-[260px] w-full mb-[48px]">
      <Image
        height={260}
        width={1280}
        src="/images/main-banner.jpg"
        alt="main-banner"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
