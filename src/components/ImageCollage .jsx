"use client";
import Image from "next/image";

export default function ImageCollage({
  leftImages = [], 
  rightImage,
  rightAlt,
  bgPosition = "right", 
  bgColor = "bg-yellow-100",
}) {

const bgClass =
  bgPosition === "right"
    ? "absolute right-0 top-0 w-2/4 h-full"
    : bgPosition === "left"
    ? "absolute left-0 top-0 w-2/4 h-full"
    : bgPosition === "center"
    ? "absolute left-1/4 top-0 w-1/2 h-full"
    : "absolute inset-0"; 

  return (
    <div className="relative flex justify-center items-center p-8">
      {/* الخلفية */}
      <div className={`${bgClass} ${bgColor} -z-10 `}></div>
{/* الصور اليسار (ممكن أكتر من صورة) */}
<div className="w-1/2 flex flex-col gap-4">
  {leftImages.map((img, index) =>
    img.src ? ( // <-- تحقق من أن src موجود
      <Image
        key={index}
        src={img.src}
        alt={img.alt || `left image ${index}`}
        width={img.w || 400}
        height={img.h || 300}
        className="shadow-lg w-full h-auto "
      />
    ) : null
  )}
</div>

{/* الصورة اليمين (اختيارية) */}
{rightImage && rightImage !== "" && ( // <-- تحقق من أن src موجود
  <div className="w-1/3 ml-8">
    <Image
      src={rightImage}
      alt={rightAlt || "right image"}
      width={400}
      height={300}
      className="shadow-lg w-full h-auto "
    />
  </div>
)}
</div>
  );
}
