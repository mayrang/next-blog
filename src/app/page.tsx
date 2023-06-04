import FeaturePosts from "@/components/FeaturePosts";
import Profile from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <FeaturePosts />
    </main>
  );
}
