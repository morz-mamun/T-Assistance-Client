
const Column = ({ title, className, icon: Icon, counts, children }) => (
  <div>
    <div className={`border-t-2 p-2 rounded-md ${className}`}>
      <div className="flex justify-between items-center gap-1">
        <div className="flex justify-center items-center gap-1">
          {Icon && <Icon />} {title}
        </div>
        <div>
          {counts}
        </div>
      </div>
    </div>
    <div className="space-y-5 my-5">
      {children}
    </div>
  </div>
);

export default Column;
