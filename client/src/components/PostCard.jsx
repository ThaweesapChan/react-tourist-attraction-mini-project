import React from "react";

const PostCard = ({
  title,
  description,
  url,
  tag,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
}) => {
  // ตัดข้อความ description ให้อยู่ภายใน 100 ตัวอักษร
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 97) + "..."
      : description;

  return (
    <div className="mb-8 mr-8 ml-8 flex ">
      {/* ซีกซ้ายของ post card
      ส่วนของรูปภาพ */}
      <div className="w-1/3 ">
        <img
          src={imageUrl1}
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>

      {/* ซีกซ้ายของ post card ข้อมูลลายละเอียด*/}
      <div className="w-2/3 pl-5">
        {/* title */}
        <h2 className="text-xl font-semibold mb-1">{title}</h2>

        {/* detail */}
        <div className="text-sm">
          {/* Description */}
          <p className=" text-gray-500">{truncatedDescription}</p>

          {/* ปุ่มอ่านต่อ */}
          <a href={url} target="_blank">
            <button className="mt-1 text-cyan-500">อ่านต่อ</button>
          </a>

          {/* Tag */}

          {/* รูปภาพเล็ก 3 ภาพ */}
          <div
            className="w-1/3 mb-4 mt-2
           flex "
          >
            <img
              src={imageUrl2}
              className="w-1/3 h-auto ml-1 mr-1 aspect-square rounded-2xl object-cover"
            />
            <img
              src={imageUrl3}
              className="w-1/3 h-auto ml-1 mr-1 aspect-square rounded-2xl object-cover"
            />
            <img
              src={imageUrl4}
              className="w-1/3 h-auto ml-1 mr-1 aspect-square rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;