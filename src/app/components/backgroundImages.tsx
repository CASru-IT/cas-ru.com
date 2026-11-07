"use client";
import Image from "next/image";

export default function BackgroundImages({
  imageFiles,
}: {
  imageFiles: string[];
}) {
  return (
    <div className="flex flex-col items-center w-full fixed -z-10 top-0 left-0">
      {(
        new Array(
          Math.ceil(
            typeof window !== "undefined" ? window.innerHeight / 128 : 10,
          ),
        ).fill(null) as unknown[]
      ).map((_, index) => (
        <div
          key={index}
          className={`flex w-max flex-nowrap will-change-transform backface-hidden ${index % 2 === 0 ? "animate-horizontal-scroll" : "animate-horizontal-scroll-reverse"}`}
        >
          {imageFiles
            .sort(() => Math.random() - 0.5)
            .map((fileName, index) => (
              <Image
                key={index}
                src={`/background/${fileName}`}
                alt={`Background ${index + 1}`}
                width={1000}
                height={500}
                className="h-32 w-auto shrink-0 contain-paint contain-layout"
                style={{ imageRendering: "smooth" }}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
