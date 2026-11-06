import {
  getAllGroupName,
  getGroupContent,
  getGroupInfo,
} from "@/utils/groupIntroduction";
import Image from "next/image";

export async function getStaticPaths() {
  return getAllGroupName().map((groupName) => {
    return {
      groupName: groupName,
    };
  });
}

export default async function Groups({
  params,
}: PageProps<"/groups/[groupName]">) {
  const groupName = (await params).groupName;
  const groupInfo = getGroupInfo(groupName);
  const groupContent = await getGroupContent(groupName);
  return (
    <>
      <Image
        src={groupInfo.header ? groupInfo.header : groupInfo.icon}
        alt={groupInfo.name}
        className="w-full max-h-96 h-[66vh] object-cover"
        width={1200}
        height={600}
      />
      <h1 className="text-3xl font-bold relative w-fit mx-auto -top-8 p-3 bg-gray-100 rounded-xl flex items-center justify-center">
        <Image
          src={groupInfo.icon}
          alt={groupInfo.name}
          className="inline-block mr-2 rounded-full aspect-square object-cover"
          width={40}
          height={40}
        />
        <div className="inline-block align-middle text-nowrap leading-none">
          {groupInfo.name}
        </div>
      </h1>
      <div
        className="max-w-2xl mx-auto p-4 min-h-[33vh]
        [&_h1]:text-2xl [&_h1]:font-medium [&_h1]:mb-4 [&_h1]:mt-4
        [&_h2]:text-xl [&_h2]:font-medium [&_h2]:mb-3 [&_h2]:mt-3
        [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:mt-2
        [&_h4]:text-md [&_h4]:font-medium [&_h4]:mb-1 [&_h4]:mt-1
        [&_h5]:text-sm [&_h5]:font-medium [&_h5]:mb-0 [&_h5]:mt-0
        [&_p]:mb-1
        [&_ul]:list-disc [&_ul]:ml-6
        [&_ol]:list-decimal [&_ol]:ml-6
        [&_a]:text-blue-500 [&_a]:underline"
      >
        {groupContent}
      </div>
    </>
  );
}
