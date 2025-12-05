import Image from "next/image";
import { getImagePath } from "@/lib/utils";

const MemberTitle = ({ language }: { language: string }) => {
  return (
    <div>
      {" "}
      {/* Member タイトル */}
      <div className="text-center mb-16">
        <div className="relative w-full max-w-md mx-auto h-16 mb-4">
          <Image
            src={getImagePath("/images/logo_member.png")}
            alt="Member"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-lg">{language === "ja" ? "メンバー" : "Members"}</p>
      </div>
    </div>
  );
};

export default MemberTitle;
