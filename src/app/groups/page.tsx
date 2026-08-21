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
    <div className="w-64 rounded-3xl shadow-lg">
      <Image
        src={groupInfo.header}
        alt={groupInfo.name}
        width={300}
        height={200}
        className="rounded-t-3xl h-32 object-cover "
      />
      <div className="p-6 pt-0">
        <h3 className="w-fit mx-auto text-7lg font-bold bg-gray-100 p-2 rounded-md relative -top-5">
          <Image
            src={groupInfo.icon}
            alt={groupInfo.name}
            width={40}
            height={40}
            className="inline-block mr-2 rounded-full aspect-square object-cover"
          />
          {groupInfo.name}
        </h3>
        <div className="overflow-y-hidden max-h-32 pt-0 mb-3">{content}</div>
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
      <ul className="flex flex-wrap gap-4 w-fit max-w-11/12 mx-auto">
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
