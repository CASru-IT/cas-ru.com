import Link from "next/link";
import Image from "next/image";
import {
  getAllGroupName,
  getGroupContent,
  getGroupInfo,
} from "@/utils/groupIntroduction";
import Button from "@/components/button";

function GroupCard({
  groupInfo,
  content,
  groupId,
}: {
  groupInfo: ReturnType<typeof getGroupInfo>;
  content: ReturnType<typeof getGroupContent>;
  groupId: ReturnType<typeof getAllGroupName>[number];
}) {
  return (
    <div className="w-full rounded-3xl shadow-lg max-w-sm">
      <Image
        src={groupInfo.header}
        alt={groupInfo.name}
        width={300}
        height={200}
        className="rounded-t-3xl h-32 w-full object-cover "
      />
      <div className="p-6 pb-3 pt-0 relative -top-10">
        <h3 className="w-fit mx-auto text-3xl font-bold bg-gray-100 p-2 rounded-md shadow-md text-ellipsis overflow-hidden whitespace-nowrap">
          <Image
            src={groupInfo.icon}
            alt={groupInfo.name}
            width={60}
            height={60}
            className="inline-block mr-2 rounded-full aspect-square object-cover"
          />
          {groupInfo.name}
        </h3>
        <div className="overflow-y-hidden max-h-32 my-2">{content}</div>
        <Button
          href={`/groups/${groupId}`}
          as={Link}
          className="ml-auto text-sm"
        >
          詳細
        </Button>
      </div>
    </div>
  );
}

export default async function Groups() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-16 mt-32 mx-auto block w-fit">
        班紹介
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-fit max-w-11/12 mx-auto">
        {getAllGroupName().map(async (groupName) => (
          <li key={groupName}>
            <GroupCard
              groupInfo={getGroupInfo(groupName)}
              groupId={groupName}
              content={await getGroupContent(groupName)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
