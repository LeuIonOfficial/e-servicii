import { PageTemplate } from "@components";
import ProfileSection from "./components/ProfileSection";
import BusinessSection from "./components/BusinessSection";
import NotificationSection from "./components/NotificationSection";

export default function Profile() {
  return (
    <PageTemplate title="Profile Section">
      <div className="space-y-10 divide-y divide-gray-900/10">
        <ProfileSection />
        <BusinessSection />
        <NotificationSection />
      </div>
    </PageTemplate>
  );
}
