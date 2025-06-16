import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 ">
      <Image
        src="/v_loading.png"
        alt="loading"
        width={200}
        height={200}
        className="animate-rise"
      />
    </div>
  );
}
