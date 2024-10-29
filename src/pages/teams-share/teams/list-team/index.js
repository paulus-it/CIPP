import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Teams";

  const actions = [
    {
      label: "View Team Settings",
      link: "/teams-share/teams/view-team-settings?tenantDomain=TenantFilter&groupId=[id]",
      multiPost: false,
      color: "success",
    },
    {
      label: "Edit Group",
      link: "/identity/administration/groups/edit?groupId=[id]&tenantDomain=TenantFilter",
      multiPost: false,
      color: "warning",
    },
  ];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListTeams?type=list"
      apiData={{
        TenantFilter: "TenantFilter",
      }}
      apiDataKey="Results"
      actions={actions}
      simpleColumns={["displayName", "description", "visibility", "mailNickname", "id"]}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
