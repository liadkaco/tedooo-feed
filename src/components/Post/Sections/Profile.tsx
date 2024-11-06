interface ProfileProps {
  avatar: string;
  username: string;
  shopName: string;
  date: string;
}

export const Profile: React.FC<ProfileProps> = ({
  avatar,
  username,
  shopName,
  date,
}) => {
  const isoDate = date;
  const newDate = new Date(isoDate);
  const formattedDate = newDate.toLocaleDateString("en-GB");
  return (
    <div className="flex flex-row items-center gap-4 h-[40px] w-[379px] px-8">
      <img
        src={avatar}
        alt="profile"
        className="w-[40px] h-[40px] rounded-full"
      />
      <div className="flex flex-col font-medium w-full">
        <p className="text-[16px] font-semibold">{username}</p>
        <div className="flex flex-row  h-[20px] gap-2">
          <p className="text-[14px] text-blue-600 font-normal">{shopName}</p>
          <p className="text-[14px] text-gray-400 font-normal">
            &bull; {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};
