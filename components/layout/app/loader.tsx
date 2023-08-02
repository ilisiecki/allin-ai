import Image from "next/image";

type Props = {
  label: string;
};

const Loader = (props: Props) => {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <div className="relative top-0 w-96">
          <div className="absolute mt-10 w-full text-center">{props.label}</div>
        </div>
        <div>
          <Image
            className="animate-ping"
            src="/img/allin-ai-logo.webp"
            alt="allin logo"
            width={80}
            height={50}
          />
        </div>
      </div>
    </>
  );
};

export default Loader;
