import { PageTemplate } from "@components";
import ProfileSection from "./components/ProfileSection";

export default function Profile() {
  return (
    <PageTemplate title="Profile Section">
      <div className="space-y-10 divide-y divide-gray-900/10">
        <ProfileSection />
      </div>
    </PageTemplate>
  );
}
