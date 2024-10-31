import SideNav from '../ui/dashboard/sidenav';

// 레이아웃은 다시 렌더링되지 않으며, 네비게이션된 부분만 부분 렌더링 가능하다.
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;
