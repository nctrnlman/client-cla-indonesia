function Overview({ overview }) {
  return (
    <section className="p-6 max-w-7xl mx-auto bg-white shadow-lg rounded-lg mb-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
      {overview.map((item, index) => {
        const Tag = item.type;
        if (Tag === "ul") {
          return (
            <Tag key={index} className={item.className}>
              {item.content.map((subItem, subIndex) => (
                <subItem.type key={subIndex} className={subItem.className}>
                  {subItem.content}
                </subItem.type>
              ))}
            </Tag>
          );
        }
        return (
          <Tag key={index} className={item.className}>
            {item.content}
          </Tag>
        );
      })}
    </section>
  );
}

export default Overview;
