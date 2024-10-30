const AboutPage = () => {
  return <div>AboutPage</div>;
};

AboutPage.getLayout = (page: React.ReactNode) => {
  return (
    <div className="layout">
      <div className="nested-layout">{page}</div>
    </div>
  );
};

export default AboutPage;
